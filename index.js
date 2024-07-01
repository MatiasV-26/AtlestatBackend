const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./util/database');
const User = require('./models/user');
const Institution = require('./models/institution');
const Person = require('./models/person');
const Team = require('./models/team');
const Admin = require('./models/admin');
const Coach = require('./models/coach');
const Trainer = require('./models/trainer');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

//test route
app.get('/', (req, res, next) => {
  res.send('Hello World');
});

//CRUD routes
app.use('/users', require('./routes/users'));
app.use('/institutions', require('./routes/institutions'));
app.use('/personas', require('./routes/personas'));
app.use('/teams', require('./routes/teams'));
app.use('/admins', require('./routes/admins'));
app.use('/coaches', require('./routes/coaches'));
app.use('/trainers', require('./routes/trainers'));
//error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

//sync database
sequelize
  .sync()
  .then(result => {
    console.log("Database connected");
    app.listen(3000);
  })
  .catch(err => console.log(err));