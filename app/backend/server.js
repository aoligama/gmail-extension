require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology:true })
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Connection OK!'))

app.use(express.json())

const subscribersRouter = require('./routes/templates')
app.use('/templates', subscribersRouter)

app.listen(3001, () => {
    console.log('Server running on port 3001')
})