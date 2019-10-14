const mongoose = require('mongoose');

const SpotSheme = mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true,
    },
})

SpotSheme.virtual('thumbnail_url').get(function () {
    return `http://localhost:3333/files/${this.thumbnail}`;
})

module.exports = mongoose.model('Spot', SpotSheme);