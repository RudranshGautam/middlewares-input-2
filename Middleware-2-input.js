
const express=require('express');
const bodyParser=require('body-parser');
const clean=express();
clean.use(bodyParser.urlencoded({extended:false}));
clean.use('/add-product',(req,res,next)=>{
res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit" >Add Product</button></form> ' );
});
clean.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
clean.use('/',(req,res,next)=>{
    res.send('<h1>Hello from Express!</h1>');
});
clean.listen(3000);