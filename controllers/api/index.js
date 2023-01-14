const router = require('express').Router();
const userRoutes = require('./userRoutes');
const post = require('./post');

router.use('/users', userRoutes);
router.use('/post', post);


module.exports = router;
