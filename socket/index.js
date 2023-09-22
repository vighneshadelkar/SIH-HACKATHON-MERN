const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const cors = require('cors');
const Messages = require('../socket/model/messages'); // Assuming you have a "messages" model

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  }
});

mongoose.connect('mongodb://localhost:27017/vighnesh-social', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(cors());

app.use(express.json());

app.post('/messages', async (req, res) => {
  try {
    const message = new Messages(req.body);
    const newMessage = await message.save();
    return res.status(201).json(newMessage);
  } catch (error) {
    return res.status(401).json({ message: error });
  }
});

app.get('/messages/:id', async (req, res) => {
  try {
    const message = await Messages.find({
        conversationId: req.params.id
    });

    res.status(201).json(message)
} catch (error) {
    res.status(401).json({ message: error });
}
})

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('sendMessage', async (message) => {
    try {
      const savedMessage = await saveMessage(message);
      io.emit('receiveMessage', savedMessage);
    } catch (error) {
      console.error('Error saving message:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

async function saveMessage(message) {
  try {
    const savedMessage = await Messages.create(message);
    return savedMessage;
  } catch (error) {
    throw new Error('Error saving message:', error);
  }
}

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
