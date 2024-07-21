"use strict"
/*------------------------------------------------
             STORE API WITH MONGODB
-------------------------------------------------*/

// For importing Express
const express = require('express');
const app = express();

/*------------------------------------------------*/

// For reading the dotenv file
require('dotenv').config()
const PORT = process.env.PORT || 8000


/*------------------------------------------------*/

// For accepting JSON data
app.use(express.json())


/*------------------------------------------------*/

// For catch the async errors
require('express-async-errors')


/*------------------------------------------------*/

// For connecting the DB
require('./src/dbConnection')()

app.use('/store', require('./src/routes/productsRouter'))
app.use('/user', require('./src/routes/userRouter'))

/*------------------------------------------------*/


// For calling errorHandler
app.use(require('./src/middlewares/errorHandler'))


/*------------------------------------------------*/

// For running the server
app.listen(PORT, console.log('Listening on http://127.0.0.1:'+ PORT))