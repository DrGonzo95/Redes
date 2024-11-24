// models/userModel.js
let users = [{ id: 1, name: 'Juan' }, { id: 2, name: 'Maria' }];

const getAllUsers = () => users;

const getUserById = (id) => users.find(user => user.id === id);

const addUser = (name) => {
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    return newUser;
};

module.exports = { getAllUsers, getUserById, addUser };