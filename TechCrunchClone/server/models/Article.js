const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    publishedAt: {
        type: Date,
        default: Date.now
    },
    imageUrl: {
        type: String
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Article', ArticleSchema);