require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const helmet = require('helmet')
const compression = require('compression')

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
        replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    },
    err => {
        if (err) return console.log('Error: ', err)
        console.log(
            'MongoDB Connection -- Ready state is: ',
            mongoose.connection.readyState
        )
    }
)

const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Connection OK!'))

app.use(express.json())
app.use(helmet())
app.use(compression())

const templatesRouter = require('./routes/templates')
app.use('/templates', templatesRouter)

app.listen(3000, () => {
    console.log('Server running on port 5000')
})
