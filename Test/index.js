const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ limit: '10mb' }));
app.use('/', require('./send'));
app.use(express.static('UI'));
app.use(cors())

app.listen(PORT, () => {
    console.log(`Сервер запущен ${PORT}`);
});