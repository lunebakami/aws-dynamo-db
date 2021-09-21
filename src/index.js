require('dotenv').config();
const express = require('express');
const cors = require('cors');

const ImageController = require('./controllers/ImageController');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', ImageController.index);
app.post('/', ImageController.store);
app.get('/:id', ImageController.show);
app.delete('/:id', ImageController.destroy);

app.listen(3000);
