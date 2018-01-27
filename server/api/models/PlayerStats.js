const mongoose = require('mongoose');

const playerStatSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fk_player_id: mongoose.Schema.Types.ObjectId,
    maxHit: { type: Number, default: 0 },
    maxHitCount: { type: Number, default: 0 },
    metaData: { type: Object, default: {} }
});

module.exports = mongoose.model('PlayerStats', playerStatSchema);