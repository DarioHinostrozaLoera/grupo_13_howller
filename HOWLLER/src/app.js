// Modules
const express = require('express');
const app = express();
// Here is missing one... 😇
const path = require('path');

const mainRouter = require('./routes/mainRouter');

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs');

//Settings
app.use(express.static('public'));

let port = process.env.PORT || 3000;

app.use('/', mainRouter);

app.listen(port, () => {
    console.log(`Server listening in port ${port} 🤓👌 `);
});

/*
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.ejs');
    
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
    
});

app.get('/cart', (req,res)=>{
    res.sendFile(__dirname + '/views/cart.html');
    
});

app.get('/product1', (req,res)=>{
    res.sendFile(__dirname + '/views/detalle_product1.html');
});

app.get('/product2', (req,res)=>{
    res.sendFile(__dirname + '/views/detalle_product2.html');
});

app.get('/product3', (req,res)=>{
    res.sendFile(__dirname + '/views/detalle_product3.html');
});

app.get('/product4', (req,res)=>{
    res.sendFile(__dirname + '/views/detalle_product4.html');
});

app.get('/product5', (req,res)=>{
    res.sendFile(__dirname + '/views/detalle_product5.html');
});

app.get('/product6', (req,res)=>{
    res.sendFile(__dirname + '/views/detalle_product6.html');
});

app.get('/product7', (req,res)=>{
    res.sendFile(__dirname + '/views/detalle_product7.html');
});

app.get('/product8', (req,res)=>{
    res.sendFile(__dirname + '/views/detalle_product8.html');
});
*/
