const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Posts } = require('../models');

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

router.get('/dash', withAuth, async (req, res) => {
    try {
        const postData = await Posts.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) =>
            post.get({ plain: true })
        );
        const userId = req.session.user_id
        const user = await User.findByPk(userId)
        res.render('dash', {
            loggedIn: req.session.loggedIn,
            username: user.username,
            posts,
            title: 'Dashboard'
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/card', withAuth, async (req, res) => {
    const userId = req.session.user_id
    const user = await User.findByPk(userId)
    res.render('card', {
        loggedIn: req.session.loggedIn,
        username: user.username,
        title: 'New Post'
    })
});

module.exports = router;