const express = require('express');
const Convorouter = express.Router();
const Conversations = require('../models/conversation');
const { findById } = require('../models/users');

Convorouter.post("/", async (req, res) => {
    try {
        const conversation = await new Conversations({
            members: [req.body.senderId, req.body.recieverId]
        })
        const newConversation = await conversation.save();
        return res.status(201).json(newConversation);
    } catch (error) {
        return res.status(404).json({message:"error"});
    }
});

Convorouter.get('/:id', async (req, res) => {
    try {
        const conversation = await Conversations.find({
            members:{ $in:[req.params.id]}
        })
        return res.status(201).json(conversation);
    } catch (error) {
        return res.status(401).json({message:error});
    }
});

module.exports = Convorouter;