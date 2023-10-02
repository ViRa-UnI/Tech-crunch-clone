const User = require('../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');

exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
        return res.status(400).json({ message: 'User already exists' });
    }
    user = new User({
        name,
        email,
        password
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.status(200).json({ message: 'User created successfully' });
};

exports.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
};

exports.authenticateUser = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/admin/dashboard',
        failureRedirect: '/admin',
        failureFlash: true
    })(req, res, next);
};

exports.logoutUser = (req, res) => {
    req.logout();
    res.redirect('/admin');
};