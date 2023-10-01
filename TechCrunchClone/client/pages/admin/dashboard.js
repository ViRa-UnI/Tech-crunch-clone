import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminPanel from '../../components/AdminPanel';

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get('/api/articles');
      setArticles(res.data);
    };

    const fetchUsers = async () => {
      const res = await axios.get('/api/users');
      setUsers(res.data);
    };

    fetchArticles();
    fetchUsers();
  }, []);

  return (
    <div>
      <AdminPanel articles={articles} users={users} />
    </div>
  );
};

export default Dashboard;