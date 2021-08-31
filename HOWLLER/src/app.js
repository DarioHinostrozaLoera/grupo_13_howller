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

