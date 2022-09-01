const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    contents: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
}, {timestamps: true})

const Question = mongoose.model('questions',QuestionSchema)
module.exports = Question
