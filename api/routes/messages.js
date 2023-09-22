const express = require('express');
const Messagerouter = express.Router();
const Messages = require('../models/message');

Messagerouter.post("/", async (req, res) => {
    try {
        const message = new Messages(req.body)

        const newmessage = await message.save();

        return res.status(201).json(newmessage)
    } catch (error) {
        return res.status(401).json({ message: error });
    }
});

Messagerouter.get('/:id', async (req, res) => {
    try {
        const message = await Messages.find({
            conversationId: req.params.conversationId
        });

        res.status(201).json(message)
    } catch (error) {
        res.status(401).json({ message: error });
    }
})

module.exports = Messagerouter;