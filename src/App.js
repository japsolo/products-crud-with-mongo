const express = require('express');
const path = require('path');
const mongoose = require('mongoose'); 

const app = express();

// Seeders
require('./database/seeders')

// App setup
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Listening port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

// Public folder
app.use('/assets/', express.static(path.join(__dirname, '../public')));

// DB connect
mongoose.connect('mongodb://localhost/dbShopCart', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// Routes
app.get('/', (req, res) => res.redirect('/products'));

const productsRouter = require('./routes/productsRuotes');
app.use('/products', productsRouter);






