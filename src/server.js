require('dotenv').config({
    path: (process.env.NODE_ENV == 'prod')? '.env.prod' : '.env.dev'
})

const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(process.env.SERVER_PORT)