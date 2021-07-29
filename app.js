const express = require ('express');
const app = express ();

const path = require ('path');

const publicPath = path.resolve(__dirname, 'public');

app.use (express.static(publicPath));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

//Require de los archivos de las rutas
const mainRouter = require('./routes/main');
const userRouter = require('./routes/registro')


app.use('/', mainRouter);
app.use('/user', userRouter);


app.listen (3000, () => console.log ('Servidor 3000 corriendo')
);