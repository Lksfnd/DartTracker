const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, default: "New game" },
    participants: { type: [ mongoose.Schema.Types.ObjectId ] },
    startScore: { type: Number, default: 501 },
    mode_in: { type: Number, default: 0 },
    mode_out: { type: Number, default: 0 },
    winner: { type: mongoose.Schema.Types.ObjectId },
    metaData: { type: Object, default: {} }
});

module.exports = mongoose.model('Game', gameSchema);