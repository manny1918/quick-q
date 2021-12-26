const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
    const users = await User.find();
    res.render('users/index', { users });
});

router.get('/new', (req, res) => {
    res.render('users/new');
});

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('users/show', { user });
});

router.put('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {...req.body.user});
    user.save();
    res.redirect(`/users/${req.params.id}`);
});

router.get('/:id/edit', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('users/edit', { user });
});

router.post('/', (req, res) => {
    const user = new User(req.body.user);
    user.save();
    res.redirect('/users');
});

module.exports = router;