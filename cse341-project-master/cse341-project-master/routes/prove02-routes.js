const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();
const bookTitle = [];
const bookSummary = [];

router.post('/add-books', (req, res, next) => {
    const title = req.body.bookTitle;
    const summary = req.body.bookSummary;

    bookTitle.push(title);
    bookSummary.push(summary);

    res.redirect('/');
})

router.get('/show-book', (req, res, next) => {
    res.render('pages/show-book', {
        title: 'Prove 02 assignment', 
        path: '/show-book', 
        bookTitle: bookTitle,
        bookSummary: bookSummary, 
        activeTA03: true, 
        contentCSS: true
    });
});

router.get('/', (req, res, next) => {
    res.render('pages/add-book', {
        title: 'Prove 02 assignment', 
        path: '/',  
        activeTA03: true, 
        contentCSS: true,
    
    });
});
exports.routes = router;