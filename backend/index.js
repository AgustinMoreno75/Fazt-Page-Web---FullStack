const express = require('express')
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')

const app = express()

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
