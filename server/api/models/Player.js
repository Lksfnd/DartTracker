const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    pictureUrl: { type: String },
    wins: { type: Number, default: 0 },
    losses: { type: Number, default: 0 }
});

module.exports = mongoose.model('Player', playerSchema);