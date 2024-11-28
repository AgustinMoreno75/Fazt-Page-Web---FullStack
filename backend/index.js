// if (process.env.NODE_ENV === 'development') require('dotenv').config()
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')
const cors = require('cors')

//initializations
const app = express()
require('./database')

app.use(express.json())

const PORT = process.env.PORT ?? 3005

// middlewares 
app.use(morgan('dev'))
const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'), 
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname))
    }
})
app.use(multer({storage}).single('image'))
app.use(express.urlencoded({extended: false}))
app.use(cors({ origin: 'http://localhost:8080' }));

// Routes 

app.use('/api/books',require('./routes/books'))

// static files

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
