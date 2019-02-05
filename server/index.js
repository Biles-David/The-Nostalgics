require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const { json } = require("body-parser");
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;
const port = SERVER_PORT;

const app = express();
app.use(json());

massive(CONNECTION_STRING)
.then(db => app.set('db', db))
.catch(err => console.log(err));

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}));

app.listen(port, () => console.log(`Listening on port ${port}`))