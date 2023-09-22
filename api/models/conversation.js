const mongoose=require('mongoose');

const ConversationSchema=mongoose.Schema({
    members:{
        type: Array,
        required:true
    }
},{timestamps:true});

module.exports=mongoose.model('Conversations',ConversationSchema);