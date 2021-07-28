const express = require ('express');
const app = express ();
const path = require ('path');
const publicPath = path.resolve(__dirname, 'public');

app.set('view engine', 'ejs');

app.use (express.static(publicPath));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'public/views/home.html'))
});

app.listen (3000, () => console.log ('Servidor 3000 corriendo')
);

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/views/login.html'));
});

app.get('/registro', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/views/registro.html'));
});

app.get('/Carrito', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/views/Carrito.html'));
});

app.get('/detalle', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/views/detalle.html'));
});
