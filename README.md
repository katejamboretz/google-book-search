# Google Book Search

This site queries the google books api with search terms and displays images, title, author name, a summary descriptions and a link to more information. The book can be saved to a mongo database. To view saved books, the user can switch the saved books page to view what was saved, and delete these from the database.

## Deployed Website Link

[Book Search Site](https://read-it-all.herokuapp.com/)

## Built With

- [Create React App](https://github.com/facebook/create-react-app) - web app contained within the front end, resources at the end of this readme.
- [Heroku](https://www.heroku.com/) - platform to deploy live websites
- [Google Books API](https://developers.google.com/books) - an API for querying bookss
- [Mongo](https://www.mongodb.com/) - noSQL database
- [Node](https://nodejs.org/en/) - a Javascript libary for backend logic, or for use outside a browser
- [Mongoose](https://www.npmjs.com/package/mongoose) - a node package for interacting with Mongo database
- [Axios](https://www.npmjs.com/package/axios) - a node package for making database queries
- [Express](https://www.npmjs.com/package/express) - a node package for routing
- [Path](https://www.npmjs.com/package/path) - a node package for setting up paths
- [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/download/) - a frontend design library
- [JQuery](https://jquery.com/) - a Javascript library
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - HyperText Markup Language used for structure
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Cascading Style Sheets used for styling
- [favicon.io](https://favicon.io/) - free favicon generator

## Authors

- **Kate Jamboretz** - _Initial work_ - [katejamboretz](https://github.com/katejamboretz)
- **UCB Extension Full Stack Program** - _provide assignment objective, overall purpose and initial MERN starter code_

## Acknowledgments

- UC Berkeley Extension Full Stack Development 2020 Instructor, TAs and classmates
- [PurpleBooth README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)




## REACT APP RESOURCES

## Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
