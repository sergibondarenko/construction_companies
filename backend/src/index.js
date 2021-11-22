/* global process, __dirname */
require('dotenv').config();
const express = require('express');
const path = require('path');
const { defineRoutes } = require('./routes');
const { requestLogger } = require('./middleware');

const PORT = process.env.SERVER_PORT;
const app = express();

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
