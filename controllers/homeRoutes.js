const router = require('express').Router();
const withAuth = require('../utils/auth');
const User = require('../models/user');

router.get('/', async (req, res) => {
    res.render('login', { title: 'login' })
});

router.get('/signup', async (req, res) => {
    res.render('signup', { title: 'Create Account' })
});

router.get('/home', withAuth, async (req, res) => {
    const userId = req.session.user_id
    const user = await User.findByPk(userId)
    res.render('home', {
        loggedIn: req.session.loggedIn,
        username: user.username,
        title: 'The Blog'
    });
});

// router.get('/dash', async (req, res) => {
//     res.render('dash', { title: 'Dashboard' })
// });

module.exports = router;