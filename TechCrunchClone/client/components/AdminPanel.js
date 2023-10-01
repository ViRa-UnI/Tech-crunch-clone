import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleList from './ArticleList';

const AdminPanel = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const res = await axios.get('/api/articles');
    setArticles(res.data);
  };

  const deleteArticle = async (id) => {
    await axios.delete(`/api/articles/${id}`);
    fetchArticles();
  };

  return (
    <div id="admin-panel">
      <h2>Admin Panel</h2>
      <ArticleList articles={articles} deleteArticle={deleteArticle} />
    </div>
  );
};

export default AdminPanel;