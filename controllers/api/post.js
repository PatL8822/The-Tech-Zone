const router = require('express').Router();
const Posts = require('../../models/post');
const withAuth = require('../../utils/auth');

router.post('/addpost', withAuth, async (req, res) => {
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

router.put('/:id', withAuth, async (req, res) => {

    try {
        const editingPost = await Posts.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            });

        if (!editingPost[0]) {
            res.status(404).json({ message: 'No post with this id!' });
            return;
        }
        res.status(200).json(editingPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postsData = await Posts.destroy({
            where: {
                id: req.params.id
            },
        });

        if (!postsData) {
            res.status(404).json({ message: 'No post found by this user!' });
            return;
        }

        res.status(200).json(postsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;