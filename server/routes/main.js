const express = require('express');
const router = express.Router();

//Routes

router.get('',(req,res)=>{
const locals = {
    title: 'blog-website',
    description: 'a simple blog website'
} 
    res.render('index',{ locals })
});

router.get('/about',(req,res)=>{
    res.render('about')
})

router.get('/contact',(req,res)=>{
    res.render('contact')
})


module.exports = router;