const express = require("express");
const Router = express.Router();
const Post = require('../Models/post');

//ROUTES

Router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err) {
        res.json({message: err});
    }
});

// Upload a post

Router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost); 
    }
    catch (err){
        res.json({message: err})
    }
})

// Get a post

Router.get('/:postid', async (req, res) => {
    console.log(req.params.postid);
    try{
        const post = await Post.findById(req.params.postid);
        res.json(post);
    }
    catch(err) {
        res.json({message: err});
    }
})

// Delete a post

Router.delete('/:postid', async (req, res) => {
    
    try {
        const removedPost = await Post.remove({_id: req.params.postid});
        res.json(removedPost);
    }
    catch(err) {
        res.json({message: err});
    }
})

// Update a post

Router.patch('/:postid', async (req, res) => {
    
    try {
        const editedPost = await Post.updateOne(
            {_id: req.params.postid}, 
            {$set: {title: req.body.title}
        });
        res.json(editedPost);
    }
    catch(err) {
        res.json({message: err});
    }
})

module.exports = Router;