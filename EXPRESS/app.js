const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));
app.set('views', path.resolve(__dirname, 'views'));  
app.set('view engine', 'ejs');


app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
}));

app.use(cookies());

app.use(userLoggedMiddleware);

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');
const productsRouter = require('./routes/products');
const apiProductsRouter = require('./routes/api_routes/apiProductsRoute');
const apiUserRouter = require('./routes/api_routes/apiUsersRoute');

app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/products', productsRouter);

app.use('/api/products', apiProductsRouter);
app.use('/api/users', apiUserRouter);

app.listen(3001, () => console.log('servidor corriendo en el puerto 3001'));
