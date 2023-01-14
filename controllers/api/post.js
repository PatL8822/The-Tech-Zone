const router = require('express').Router();
const Posts = require('../../models/post');
const withAuth = require('../../utils/auth');

router.post('/newposts', withAuth, async (req, res) => {
    try {
        const newPost = await Posts.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/posts:id', withAuth, async (req, res) => {
    try {
        const postsData = await Posts.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postsData) {
            res.status(404).json({ message: 'No post found by this user!' });
            return;
        }

        res.status(200).json(projectData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;