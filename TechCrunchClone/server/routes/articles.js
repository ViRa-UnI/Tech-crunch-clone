const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');
const auth = require('../middleware/auth');

router.get('/', articlesController.getArticles);
router.get('/:id', articlesController.getArticle);
router.post('/', auth, articlesController.createArticle);
router.put('/:id', auth, articlesController.updateArticle);
router.delete('/:id', auth, articlesController.deleteArticle);

module.exports = router;