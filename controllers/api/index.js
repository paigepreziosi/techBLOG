const router = require('express').Router();

const userRoutes = require('./userRoutes');
const blogpostRoutes = require("./blogpostRoutes.js");
const commentRoutes = require('./commentRoutes.js');

router.use('/users', userRoutes);
router.use('/posts', blogpostRoutes);
router.use('/comments', commentRoutes)

module.exports = router;