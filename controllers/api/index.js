const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogpostRoutes = require('./blogpostRoutes');
const commentsRoutes = require('./commentsRoutes');

router.use('/users', userRoutes);
router.use('/blogpost', blogpostRoutes);
router.use('/comment', commentsRoutes);


module.exports = router;
