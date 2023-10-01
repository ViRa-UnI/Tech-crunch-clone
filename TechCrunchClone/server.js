const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();
require('./config/db');
require('./config/passport')(passport);

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

const articlesRoute = require('./routes/articles');
const usersRoute = require('./routes/users');

app.use('/articles', articlesRoute);
app.use('/users', usersRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});