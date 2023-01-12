const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('login', { title: 'login' })
});

router.get('/signup', async (req, res) => {
    res.render('signup', { title: 'Create Account' })
});

router.get('/home', async (req, res) => {
    res.render('home', { title: 'Home' })
});

router.get('/dash', async (req, res) => {
    res.render('dash', { title: 'Dashboard' })
});

module.exports = router;