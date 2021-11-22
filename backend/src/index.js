/* global process, __dirname */
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const { defineRoutes } = require('./routes');
const { requestLogger } = require('./middleware');

const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

const app = express();

app.use(cors({
  origin: [FRONTEND_URL],
  methods: ['GET', 'POST'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(express.static(path.resolve(__dirname, '../../frontend/build')));

defineRoutes({ app });

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
