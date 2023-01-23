# Bandwagon 
<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/express-orange" />
    <img src="https://img.shields.io/badge/Sequelize-blue"  />
    <img src="https://img.shields.io/badge/mySQL-blue"  />
    <img src="https://img.shields.io/badge/dotenv-green" />
</p>
This app is a platform to connect both live music enthusiasts and apsiring musicians alike. Users can use this app to discover local local-up-and coming artists, as well as find local live music shows to attend. Music who are just starting out are able to utilize the platform to to reach new audiences, build a following, and advertise their upcoming shows/music. Built using MySQL2, Express, Sequelize, Handlebars, dotenv, and Fomantic UI.

The motivation for this project was to solve a real-world problem, that problem being that it is extraordinarily difficulty for new artists to find new audiences and gain popularity. This website was made with unestablished artists in mind, created as a hub for music enthusiasts to find their next biggest sesnation.

We were inspired by our very real experiences in trying to find new artists that were local to us via other means besides recommended artists on Spotify and Instagram stories that disappear after 24 hours. It was also an insanely fun concept to work on, combining the arts of making a sustainable backend with persistent data along with a User Interface that feels friendly and easy-to-use.

This platform solves the problem of regular music enjoyers not being able to find new and not yet popular artists, along with those artists being able to connect with potential fans and guide them to their events. This will continue to be a work in progress as we narrow down more information about potential users, consider expanding the project to include regular folks that may want a more social experience, and add additional useful features to create a more dynamic app.

We learned that separation of tasks for project members is crucial in full-stack development. We learned a lot about effective back-end and front-end management, how to effectively use frameworks to create a great user experience easily, and how to implement the Model-View-Controller framework when it came to organizing our server and back-end. This was a truly fun project to create, and we can't wait to see what's in store for the future.

## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#credits)
  

## Installation

No installation required. This app is hosted at this URL: https://bandwagon-official.herokuapp.com/ 

To access and manually configure with the code if you please:
1. `git clone` the repo to your local machine so that you have the project files
2. Install NodeJS and run `npm install` to install the following npm package dependencies specified in `package.json`:
* bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2, nodemon, sequelize, [Cloudinary](https://cloudinary.com/), [Fomantic-ui](https://fomantic-ui.com/) 
3. Enter your MySQL2 credentials into the .env file provided in the repo in order to connect to your local MySQL server
4. Run the server and connect to local host:
`npm run dev`

Happy coding!

## Usage

Check out our features from the deployed application: 
💻 [Click here for the view the full video demo]()
![alt text](/public/assets/images/screenshotwebsite.jpg)

## Features
- Map view displaying pins of event locations for the current day
- Carousel of new artists on front page
- Only "today's" events shown on homepage
- Page to see all events happening near you
- Functioning sign up/login and user dashboard for artists
- Sign up and event creation features image upload thanks to Cloudinary
- Ability to create new events and see them on your dashboard
- Ability to create artist profile

## Credits

The collaborators for this project are as follows:

Grace Yao
https://github.com/gyao1487

Jazmin Tweedle
https://github.com/jtweedle1

Andrew Phinney
https://github.com/aphinney0516

Moses Carrisoza
https://github.com/MoZCa

Cloudinary - Image Hosting 
https://cloudinary.com/

## License

MIT licence
https://spdx.org/licenses/MIT.html#:~:text=Text-,MIT%20License,-Copyright%20(c)%20%3Cyear

# Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request



