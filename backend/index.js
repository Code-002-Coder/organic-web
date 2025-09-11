const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./controllers/AuthController');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Auth routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
