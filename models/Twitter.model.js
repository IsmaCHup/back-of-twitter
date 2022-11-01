const mongoose = require('mongoose');

const twitterSchema = mongoose.Schema({
    author: {
        ref: 'Author',
        type: mongoose.Schema.Types.ObjectId
    },
    twit: String,
    like: {
        ref: 'Author',
        type: []}
});

const Twitter = mongoose.model('Twitter', twitterSchema);
module.exports = Twitter;