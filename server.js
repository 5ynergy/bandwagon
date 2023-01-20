require('dotenv').config();
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
// const expHandlebars = require("express-handlebars") //invoking handlebars so that we can use templates
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require("path")

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'seriously it is a secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("public")) //making files and folders in public available
app.use(routes);
// app.use(require('./controllers'))

//configure/connect handlebars to express
// const handlebars = expHandlebars.create({}); //we will pass helper functions here
const { engine } = require("express-handlebars")
app.engine("handlebars", engine({defaultLayout: "main"}))
app.set("view engine", "handlebars") //second param. is the file extension

//GET route for homepage
// app.get("/", (req, res) => {
//   res.render("pages/homepage")
// });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server is listening.'));
});
