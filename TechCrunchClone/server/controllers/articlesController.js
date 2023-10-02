const express = require('express');
const Article = require('../models/Article');

// Get all articles
exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Get one article
exports.getArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article == null) {
      return res.status(404).json({ message: 'Cannot find article' });
    }
    res.json(article);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Create one article
exports.createArticle = async (req, res) => {
  const article = new Article({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  });

  try {
    const newArticle = await article.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update one article
exports.updateArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article == null) {
      return res.status(404).json({ message: 'Cannot find article' });
    }

    if (req.body.title != null) {
      article.title = req.body.title;
    }

    if (req.body.content != null) {
      article.content = req.body.content;
    }

    const updatedArticle = await article.save();
    res.json(updatedArticle);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Delete one article
exports.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article == null) {
      return res.status(404).json({ message: 'Cannot find article' });
    }

    await article.remove();
    res.json({ message: 'Deleted Article' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};