const mongoose = require('mongoose');

// Our Schema
const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ['DRAFT', 'PUBLISHED'],
        default: 'DRAFT'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Movie', MovieSchema);