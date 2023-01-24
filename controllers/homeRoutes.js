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
    try {
        const allPostData = await Posts.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const allPosts = allPostData.map((post) =>
            post.get({ plain: true })
        );

        const userId = req.session.user_id
        const user = await User.findByPk(userId)
        res.render('home', {
            loggedIn: req.session.loggedIn,
            username: user.username,
            allPosts,
            title: 'All Blog Posts'
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dash', withAuth, async (req, res) => {
    try {
        const postData = await Posts.findAll({
            where: {
                // id: req.params.id,
                user_id: req.session.user_id,
            },
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

router.get('/edit/:id', withAuth, async (req, res) => {
    try {

        const postID = req.params.id;
        const postData = await Posts.findByPk(postID);

        const userId = req.session.user_id
        const user = await User.findByPk(userId)

        res.render('edit', {
            postId: postID,
            name: postData.name,
            description: postData.description,
            loggedIn: req.session.loggedIn,
            username: user.username,
            title: 'Edit Post'
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;