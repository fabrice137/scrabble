const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mainRoutes = require('./routes/mainRoutes');
const port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(mainRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
