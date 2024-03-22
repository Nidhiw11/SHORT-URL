const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));
const blogRouter = require('./routes/url');
const port = 9000;
mongoose.connect('mongodb://127.0.0.1:27017/Urlshortner', {

});

mongoose.connection.on('open', () => {
  console.log('Connected to MongoDB successfully');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

app.use('/shorturl',blogRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});