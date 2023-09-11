const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const dotenv = require('dotenv').config();

router.get('/users', async (req, res) => {
    try {
        // gets all the users in db
        const dbUsers = await User.find()

        return res.status(200).json(dbUsers);

    } catch (error) {
        return res.status(401).json({message:error});
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        let user = await User.findById(req.params.id)

        return res.status(200).json(user)
    } catch (error) {
        res.status(401).json({message:error});
    }
})


module.exports = router;