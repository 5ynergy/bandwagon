const router = require("express").Router();
const { User, Genre } = require("../models");

// CREATE new user
router.post("/signup", async (req, res) => {
  try {
    const {username, email, password, name, bio, socials,genre_id,user_image} = req.body
    // Need to figure out how to translate Front End Input genre name into genre_id for the back end
    //const genre_id = front end input genre_name.id or something
    const newUser = await User.create({
      //Credentials
      username,
      email,
      password,

      //Artist data
      name,
      bio,
      socials,
      genre_id, //Need to figure out how to translate front end input (Genre name) to genre_id when submitted to database
      user_image,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(newUser);
    });

    // res.redirect("/login"); //After you sign in, it redirects you to login page where you can login
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // Create session variables based on the logged in user -  !!! This is key for the requests that requires the current userid) !!!
    req.session.save(() => {
      req.session.user_id = userData.id; //This is what we probably will use for routes for logged in user
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
    
    // res.redirect("/");
  } else {
    res.status(404).end();
  }
});

module.exports = router;

// //Sample json data for Insomnia test:
// [
//   {
//     "username": "graceIsCrying",
//     "email": "gee.yao@gmail.com",
//     "password": "imsotired123",
//     "name": "Grace Yao",
//     "bio": "When will this suffering end",
//     "socials": "github.com/gyao1487",
//     "genre_id": 3,
//     "user_image": null
//   }
// ];

// {
// 	"username": "sadgirlmusic",
//     "email": "sza@gmial.com",
//     "password": "ijustkilledmyex",
//     "name": "SZA",
//     "bio": "I make sexy sad girl songs",
//     "socials": "SZA on Apple Music",
//     "genre_id": 3,
//     "user_image": null
// }
