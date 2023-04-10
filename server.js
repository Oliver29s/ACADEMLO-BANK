require('dotenv').config()
const app = require('./app')
const { db } = require('./database/config')

db.authenticate()
.then(() => console.log('Database Authenticate'))
.catch( err => console.log(err))

db.sync()
.then(() => console.log('Database Sync'))
.catch( err => console.log(err))

const port = +process.env.PORT || 3011

app.listen(port,()=>{
    console.log(`App running on ${port}...`)
})

