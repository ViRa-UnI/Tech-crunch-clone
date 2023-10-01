import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Article from './Article';

const ArticleList = () => {
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
            {articles.map((article) => (
                <Article key={article._id} article={article} />
            ))}
        </div>
    );
};

export default ArticleList;