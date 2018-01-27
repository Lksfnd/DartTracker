const mongoose = require('mongoose');

const gameHitsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    _fk_player_id: mongoose.Schema.Types.ObjectId,
    _fk_game_id: mongoose.Schema.Types.ObjectId,
    hits: { type: Object, default: {} }
});

module.exports = mongoose.model('GameHits', gameHitsSchema);