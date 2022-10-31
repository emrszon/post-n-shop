const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', PostSchema);