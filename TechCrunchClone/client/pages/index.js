import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleList from '../components/ArticleList';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get('/api/articles');
      setArticles(res.data);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <ArticleList articles={articles} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;