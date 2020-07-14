const path = require('path')
const express = require('express')
const bodyParser= require('body-parser')
const hbs = require('hbs')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express Config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Importing routers
const userRouter = require('./routers/signup') //ADD A USER

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
// Registering routers
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is Running! on ' + port)
})