// controllers/userController.js
const userModel = require('../models/userModel');

const getUsers = (req, res) => {
    const users = userModel.getAllUsers();
    res.json(users);
};

const getUser = (req, res) => {
    const user = userModel.getUserById(parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
    }
};

const createUser = (req, res) => {
    const newUser = userModel.addUser(req.body.name);
    res.status(201).json(newUser);
};

module.exports = { getUsers, getUser, createUser };