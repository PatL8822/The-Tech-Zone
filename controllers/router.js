const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('login')
});

router.get('/createAccount', async (req, res) => {
    res.render('createAccount')
});

module.exports = router;