const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    likes:{
        type: Number,
        default: 0
    },
    firstname:{
        type: mongoose.Schema.Types.String,
        ref:'users'
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
    },
    comments:{
        type:Number,
        default: 0
    }
},{timestamps:true})

module.exports=mongoose.model('Post',postSchema);