const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/personal_data', (req, res) => {
    res.render('pdata');
});

router.get('/qualifications', (req, res) => {
    res.render('qualifications');
});

router.get('/publications', (req, res) => {
    res.render('publications');
});

router.get('/experience', (req, res) => {
    res.render('experience');
});

module.exports = router;