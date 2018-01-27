const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../../config');

// Import model
const Player = require('../models/Player');
const PlayerStats = require('../models/PlayerStats');

/**
 * Returns all players
 */
router.get('/findall', (req, res, next) => {
    Player.find()
        .then(document => {
            res.status(200).json({
                data: document
            })
        })
        .catch(error => {
            res.status(501).json({
                error
            });
        });
});

/**
 * Updates a player
 */
router.put('/update/:id', (req, res, next) => {

    const id = req.params.id;

    Player.findOne({
        _id: id
    }).then( document => {
        document.name = req.body.name || document.name;
        document.pictureUrl = req.body.pictureUrl || document.pictureUrl;
        document.wins = req.body.wins || document.wins;
        document.losses = req.body.losses || document.losses;

        document.save().then( document => {
            document.success = true;
            res.status(200).json(document);
        }).catch( error => {
            error.success = false;
            res.status(501).json(error);
        });
    }).catch( error => {
        error.success = false;
        res.status(501).json(error);
    });
});

/**
 * Returns a player by id
 */
router.get('/find/:id', (req, res, next) => {

    const id = req.params.id;

    Player.findOne({
        _id: id
    }).then(document => {
        document.success = true;
        res.status(200).json(document);
    }).catch(error => {
        error.success = false;
        res.status(501).json(error);
    });
})


/**
 * Deletes a player
 */
router.delete('/delete', (req, res, next) => {
    const id = req.body.id;

    const player = Player.remove({
        _id: id
    }, () => {

        res.status(200).json({
            success: true
        });
    });

})

/**
 * Creates a new player
 */
router.post('/create', (req, res, next) => {
    const body = req.body.data;
    console.log(body);

    const player = new Player({
        _id: mongoose.Types.ObjectId(),
        name: body.name,
        pictureUrl: body.pictureUrl
    });

    player.save().then(result => {
        result.success = true;
        res.status(201).json(result);
    }).catch(error => {
        error.success = false;
        res.status(500).json(error);
    });
});


module.exports = router;