const express = require ('express');
const app = express ();

const path = require ('path');

const publicPath = path.resolve(__dirname, 'public');

app.use (express.static(publicPath));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Require de los archivos de las rutas
const mainRouter = require('./routes/main');
// const userRouter = require('./routes/registro')
const userRouter = require('./routes/user');
const productsRouter = require('./routes/products');
// const productsController = require('./controllers/productsController');


app.use('/', mainRouter);
// app.use('/registro', userRouter);
app.use('/', userRouter);
app.use('/', productsRouter);
app.use('/products', userRouter);
app.use('/products', productsRouter);

app.listen (3000, () => console.log ('Servidor 3000 corriendo')
);