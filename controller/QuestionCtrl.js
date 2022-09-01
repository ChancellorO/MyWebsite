const Question = require('../models/question')

const mainpage = (req, res) => {
    res.render('QuestionPage', {title: 'Question Page'})
}

const AddQuestion = (req, res) => {
    const question = Question(req.body)

    question.save()
    .then(() => {
        res.redirect('/')
        console.log('Successfully Added to Database')
    })
    .catch((err) => {
        console.log(err)
    })
}

const FindSpecificQuestion = (req, res) => {
    const id = req.params.id
    console.log(id)
    Question.findById(id)
    .then((result) => {
        console.log(result)
        res.render('questiondetails', { title: 'Details', question: result})
    })
    .catch((err) => {
        console.log(err)
    })
}

const DeleteQuestion = (req, res) => {
    const id = req.params.id
    Question.findByIdAndDelete(id)
    .then(() => {
        res.json({redirect: '/'})
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = {
    mainpage,
    AddQuestion,
    FindSpecificQuestion,
    DeleteQuestion
}