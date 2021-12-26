const express = require('express');
const path = require('path')
const company = require('./routes/company');
const queue = require('./routes/queue');
const users = require('./routes/users');
const workflows = require('./routes/workflows');
const workstations = require('./routes/workstations');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

mongoose.connect('mongodb://localhost:27017/q-me', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', () => {
    console.log('Database connected');
});

const app = express();

app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use('/', company);
app.use('/', queue);
app.use('/users', users);
app.use('/workflows', workflows);
app.use('/workstations', workstations);

app.listen(3000, () => {
    console.log('Listening on port 3000');
})