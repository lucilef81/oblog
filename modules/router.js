const express = require('express')
const ejs = require('ejs')

const helpers = require('./helpers')

const articles = require('../data/article.json')

const router = express.Router()
router.use(express.static("integration"));

router.get('/', (req, res) => {
  res.render('index', { articles: articles })
})

router.get('/post/:postId', (req, res) => {
  articles.map(article => {
    if (article.id === parseInt(req.params.postId)) {
      res.render('post', { article: article })
    }
  })
})

router.get('/category/:categoryName', (req, res) => {
  const filteredArticles = articles.filter(article => article.category.toLowerCase() === req.params.categoryName)

  res.render('category', { articles: filteredArticles, category: req.params.categoryName  })
})

router.get('/author/:authorName', ( req, res) => {
  const filteredArticles = articles.filter 
  ( article => article.author.replace(' ', '-').toLowerCase()
  === req.params.authorName)

  res.render('author', { articles:
  filteredArticles, author: req.params.authorName })
})

module.exports = router