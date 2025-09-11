const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, '../db/users.json');

// Helper to read users from file
function readUsers() {
  if (!fs.existsSync(usersFile)) return [];
  const data = fs.readFileSync(usersFile, 'utf-8');
  return JSON.parse(data);
}

// Helper to write users to file
function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// Signup: Add new user
function signup({ username, password, isAdmin = false }) {
  const users = readUsers();
  if (users.find(u => u.username === username)) {
    return { success: false, message: 'User already exists' };
  }
  users.push({ username, password, isAdmin });
  writeUsers(users);
  return { success: true, message: 'Signup successful' };
}

// Login: Check user credentials
function login({ username, password }) {
  const users = readUsers();
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    return { success: true, user };
  }
  return { success: false, message: 'Login failed' };
}

module.exports = { signup, login };
