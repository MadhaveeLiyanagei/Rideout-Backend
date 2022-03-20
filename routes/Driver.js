const router = require("express").Router();
let Driver = require("../models/Driver");




//save Machine

router.post('/post/save',(req,res)=>{

    let newpost = new Driver(req.body);

    newpost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:"Post saved succesfully"
        });

    });

});

//get postMessage

router.get('/Drivers',(req,res) =>{
    Driver.find().exec((err,Driver) =>{
        if(err){
            return res.status(500).json({
                error:err
            });

        }

        return res.status(200).json ({
            success:true,
            existingDrivers:Driver


        });

    });
});

//update router

router.put('/post/update/:id',(req,res) =>{
    Driver.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post) =>{
            if(err){
                return res.status(500).json({error:err});

            }

            return res.status(200).json({
                success:"Updated Succesfull"
            });
        }
    );

});


//delect post

router.delete('/post/delect/:id',(req,res) =>{
    Driver.findByIdAndRemove(req.params.id).exec((err,deletepost) =>{

        if(err)return res.status(500).json({
            message:"Deleted massage unsuccesfull", err
        });

        return res.json({
            message:"delete succesfull", deletepost
        });
    });
});

//get specific post

//get specific post

router.get("/post/:id",(req,res) =>{
    let postID = req.params.id;
    
    Driver.findById(postID,(err,post) =>{
        if(err){
            return res.status(500).json({success:false,err});

        }

        return res.status(200).json({
                success:true,
                post
            });

        
    });
});








module.exports = router;