// const books = [];
const Book = require('../models/book');

exports.getAddBookController = (req,res,next)=> {
    // books.push({title: req.body.title});
    const  newbook = new Book(req.body.title);
    
    newbook.save();
    console.log(req.body.title);
    res.redirect("/books");
}

exports.getIndexController = (req,res,next)=> {
    res.render("index", {pageTitle:"Index"});
}

exports.getBooksController = (req,res,next)=> {
    const books = Book.fetchAll();
    res.render("books", {pageTitle:"Books", myBooks: books});
}

exports.getErrorPageController = (req,res,next)=> {
    res.status(404).render('404', {pageTitle: "Page Not Found!"});
}
