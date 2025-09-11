// File removed. Backend logic moved to /backend
// This file contained user authentication logic.
// It has been deprecated to fix frontend build errors.
const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, '../db/users.json');

function readUsers() {
  if (!fs.existsSync(usersFile)) return [];
  const data = fs.readFileSync(usersFile, 'utf-8');
  return JSON.parse(data);
}

function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

function signup({ email, password, firstName, lastName, isAdmin = false }) {
  const users = readUsers();
  if (users.find(u => u.email === email)) {
    return { success: false, message: 'Email already exists' };
  }
  const newUser = { email, password, firstName, lastName, isAdmin };
  users.push(newUser);
  writeUsers(users);
  return { success: true, user: newUser };
}

function login({ email, password }) {
  const users = readUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    return { success: true, user };
  }
  return { success: false, message: 'Login failed' };
}

module.exports = { signup, login };
