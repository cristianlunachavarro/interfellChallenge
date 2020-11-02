require("./config/db");
const express = require('express')
const app =  express()
const volleyball = require("volleyball")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const router =  require('./routes/index')
const cors = require("cors");
const passport = require("./config/passportLocal");


app.use(
    cors({
      origin: 'http://localhost:3000',
      optionsSuccessStatus: 200 
    })
  );

app.use(express.static('public'));
app.use(session({secret: 'keyboard cat'}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(volleyball)
app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', router)

app.listen(1337, console.log('Escuchando en el puerto 1337'))
