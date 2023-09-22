const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  conversationId: String,
  sender: String,
  text: String,
},{timestamps:true});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
