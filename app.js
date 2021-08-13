const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));
app.set('views', path.resolve(__dirname, 'views'));  
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');
const productsRouter = require('./routes/products');

app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/products', productsRouter);

app.listen(3000, () => console.log('servidor corriendo en el puerto 3000'));
