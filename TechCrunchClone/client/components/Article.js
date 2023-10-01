import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Article.css';

const Article = ({ article }) => {
  return (
    <div className="article">
      <h2 className="article-title">{article.title}</h2>
      <p className="article-author">{article.author}</p>
      <p className="article-content">{article.content}</p>
      <a href={article.url} className="article-link">Read more</a>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;