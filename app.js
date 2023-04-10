const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const authRouter = require('./routes/auth.routes')
const userRouter = require('./routes/user.routes')
const transfersRouter = require('./routes/transfer.routes')
const AppError = require('./utils/appError')
const { globalErrorHandler } = require('./controllers/error.controller')


const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())
app.use(cors())


//rutas USER

app.use('/api/v1/users',userRouter)
app.use('/api/v1/users',authRouter)


// rutas TRANSFERS 

app.use('/api/v1/transfers',transfersRouter)


app.all('*',(req,res,next)=>{
    return next(new AppError(`cant not find ${req.originalUrl} on this`, 404))
})

app.use(globalErrorHandler)
module.exports = app