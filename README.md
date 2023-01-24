# Bandwagon 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-green)
      
This app is a platform to connect both live music enthusiasts and apsiring musicians alike. Users can use this app to discover local local-up-and coming artists, as well as find local live music shows to attend. Music who are just starting out are able to utilize the platform to to reach new audiences, build a following, and advertise their upcoming shows/music. Built using MySQL2, Express, Sequelize, Handlebars, dotenv, and Fomantic UI.


The motivation for this project was to solve a real-world problem, that problem being that it is extraordinarily difficulty for new artists to find new audiences and gain popularity. This website was made with unestablished artists in mind, created as a hub for music enthusiasts to find their next biggest sensation.

We were inspired by our very real experiences in trying to find new artists that were local to us via other means besides recommended artists on Spotify and Instagram stories that disappear after 24 hours. It was also an insanely fun concept to work on, combining the arts of making a sustainable backend with persistent data along with a User Interface that feels friendly and easy-to-use.

This platform solves the problem of regular music enjoyers not being able to find new and not yet popular artists, along with those artists being able to connect with potential fans and guide them to their events. This will continue to be a work in progress as we narrow down more information about potential users, consider expanding the project to include regular folks that may want a more social experience, and add additional useful features to create a more dynamic app.

We learned that separation of tasks for project members is crucial in full-stack development. We learned a lot about effective back-end and front-end management, how to effectively use frameworks to create a great user experience easily, and how to implement the Model-View-Controller framework when it came to organizing our server and back-end. This was a truly fun project to create, and we cannot wait to see what is in store for the future.

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

💻 [Click here for the view the full video demo](https://youtu.be/MwMRO_uk90o)
![alt text](/public/assets/images/screenshotwebsite.jpg)
![Homepage with map](/public/assets/images/map.PNG)
![Events Page](/public/assets/images/Events-page.PNG)
![Genre Page](/public/assets/images/genres.PNG)
![Signup Page](/public/assets/images/signup.PNG)
![Login Page](/public/assets/images/login.PNG)
![Artist Dashboard](/public/assets/images/Dashboard.PNG)

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

MIT license
https://spdx.org/licenses/MIT.html#:~:text=Text-,MIT%20License,-Copyright%20(c)%20%3Cyear

# Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request



