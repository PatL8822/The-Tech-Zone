const router = require('express').Router();
const apiRoutes = require('./api')
const routes = require('./homeRoutes');

router.use('/', routes);
router.use('/api', apiRoutes);

module.exports = router;