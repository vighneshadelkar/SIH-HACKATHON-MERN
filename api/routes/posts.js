const express=require('express');
const Post=require('../models/post');
const User = require('../models/users');
const Postrouter=express.Router();

Postrouter.get('/',async(req,res)=>{
    try {
        let posts=await Post.find();
        return res.status(201).json(posts);
    } catch (error) {
        return res.status(401).json({message:error});
    }
});

// post the posts
Postrouter.post('/:id', async (req, res) => {
    try {
        const { text } = req.body;
        const userId =req.params.id;

        if (!text) {
            res.status(400).json({
                message: "enter text"
            });
        }

        const post = new Post({
            text,
            userId,
            likes:0,
            comments:0,
        })

        const savedPost = await post.save();
        res.status(201).json(savedPost);

    } catch (error) {
        res.status(401).json({message:error});
    }
})

module.exports=Postrouter