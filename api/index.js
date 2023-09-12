const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const router=require('./routes/users');
const Authrouter=require('./routes/auth')
const cookieParser = require('cookie-parser');
const Postrouter = require('./routes/posts');
// const Convorouter = require('./routes/conversations');
// const Messagerouter = require('./routes/messages');
const PORT=process.env.PORT || 4000;
const DATABASE_URL=process.env.DATABASE_URL;

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/',router);
app.use('/auth',Authrouter);
app.use('/post',Postrouter);
// app.use('/conversation',Convorouter);
// app.use('/message',Messagerouter);

mongoose.connect(DATABASE_URL, { useNewUrlParser: true });

const db=mongoose.connection;

db.on("close",(error)=>{
    console.log(error);
})

db.once('open',()=>{
    console.log("db working");
})

app.get('/', (req, res) => {
    res.send('hello');
})

app.listen(PORT, () => {
    console.log('database at port: ', PORT);
})