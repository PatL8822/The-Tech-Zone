const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('login')
});

router.get('/createAccount', async (req, res) => {
    res.render('createAccount')
});

router.get('/blog', async (req, res) => {
    res.render('blog')
});

module.exports = router;