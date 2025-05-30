const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    text: String,
    choices: [String],
    correctAnswer: String
});

module.exports = mongoose.model('Question', questionSchema);
