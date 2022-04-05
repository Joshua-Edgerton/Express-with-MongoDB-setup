const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(300, () => {
    console.log("App is listening! PORT: 3000")
})