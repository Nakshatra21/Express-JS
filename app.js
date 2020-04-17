//Importing core node modules from NPM
const express = require('express');
const bodyParser = require('body-parser');

// Importing controllers from controllers folder.
// const getBooksController = require('./controllers/getBooksController');
// const getIndexController = require('./controllers/getIndexController');
// const getErrorPageController = require('./controllers/getErrorPageController');
// const getAddBookController = require('./controllers/getErrorPageController');

const {getBooksController, getIndexController,getErrorPageController, getAddBookController} = 
        require('./controllers/myControllers');


const app = express();

const books = [];
// Using body-parsers
app.use(bodyParser.urlencoded({extended:false}));

// Using pug as templating engine..
app.set("view engine", "pug");
app.set("views", "./views");

// index page
app.get("/", getIndexController);

app.get("/books",getBooksController);

app.post("/add-book",getAddBookController );

app.use("/",getErrorPageController);

app.listen(3000);