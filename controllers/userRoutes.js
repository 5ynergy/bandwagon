const router = require("express").Router();
const { User, Genre } = require("../models");
const uploadImage = require("../cloudinary_upload/uploadimage.js");

// CREATE new user
router.post("/signup", async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      name,
      bio,
      socials,
      genre_id,
      user_image,
    } = req.body;
    const image = uploadImage(user_image)
      .then(async (url) => {
        console.log(url.secure_url);
        const newUser = await User.create({
          //Credentials
          username,
          email,
          password,
          //Artist data
          name,
          bio,
          socials,
          genre_id,
          user_image: url.secure_url,
        });
        req.session.save(() => {
          req.session.logged_in = true;
          req.session.user_id = newUser.id; //passing the user id
          res.status(200).json(newUser);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(image);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res.send(
        "<script>alert('Invalid email or password, please try again!'); window.location.href = '/login';</script>"
      );
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {

      res.send("<script>alert('Invalid email or password, please try again!'); window.location.href = '/login';</script>");
      return;

    }

    // Create session variables based on the logged in user -  !!! This is key for the requests that requires the current userid) !!!
    req.session.save(() => {
      req.session.user_id = userData.id;
      //CONFIRMED console logging req.session.user_id returns the user_id of the logged in person
      req.session.logged_in = true;
      res.redirect("/dashboard");
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/logout", (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
    req.end;
    //redirects to homepage after logged out
    res.render("pages/login");
  } else {
    res.render("pages/404");
  }
});

module.exports = router;
