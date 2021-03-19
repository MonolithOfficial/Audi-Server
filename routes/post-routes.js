const express = require('express');


const articlesRoutes = require('./../controllers/post-controller.js')

const router = express.Router()

router.get('/all', articlesRoutes.postsAll)


module.exports = router