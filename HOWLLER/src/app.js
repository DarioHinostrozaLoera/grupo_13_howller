// ************ Require's ************
const express = require('express');
const session = require('express-session');
const path = require('path');
const methodOverride = require('method-override');
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");


// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(methodOverride('_method'));
app.use(express.static('public'));
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({extended: false})); //necesario para ver los datos que vienen desde un formulario

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

app.use(cookieParser());
app.use(session({secret: 'La caja secreta', resave: false, saveUninitialized: false}));
app.use(userLoggedMiddleware); //tiene que ir después de app.use session
// ************ Route System require and use() ************
const mainRouter = require('./routes/mainRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter')

let port = process.env.PORT || 3000;

app.use('/', mainRouter); //Rutas main
app.use('/products', productsRouter); //Rutas /products
app.use('/users', usersRouter); //Rutas /users


app.listen(port, () => {
    console.log(`Server listening in port ${port} 🤓👌 `);
});

