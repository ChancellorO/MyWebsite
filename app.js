/* Dependencies */
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const QuestionRouter = require('./routes/QuestionRoute')
const Question = require('./models/question')

/* Configure the dotenv */
dotenv.config()

/* Initialize express app */
app = express()

/* Setup Middleware */
app.use(express.static("public"))
app.use(express.static("imgs"))
app.use(express.urlencoded({ extended: true })) // This is for using req.body 

/* Sets up the view engine as ejs*/
app.set('view engine', 'ejs')

mongoose.connect(process.env.URI)
.then( result =>
    /* Let the application listen to requests */
    app.listen(process.env.PORT, () => {
        console.log(`listening at ${process.env.PORT}`)
    })
)
.catch((err) => {
    console.log(err)
})




/* Routes */
app.get('/', (req, res) => {
    res.render('index', { title: 'MainPage' })
})
/* Question Route Depracated */
app.use('/questions', QuestionRouter)

app.use((req,res) => {
    res.status(404).render('ErrorPage', {title: '404 Error'})
})