const router = require('express').Router( )

router.use('/api', require('./postRoutes'))
router.use('/api', require('./userRoutes'))

module.exports = router