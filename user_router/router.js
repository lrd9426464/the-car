const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
router.get("/v1/search/:uname&:upwd",(req,res)=>{
    var _uname=req.params.uname;
    var _upwd=req.params.upwd;
    pool.query("select * from user where uname=? and upwd=?",[_uname,_upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send("0");
        }
    });
});
router.post("/v1/insert",(req,res)=>{
    var obj=req.body;
    pool.query("insert into user set ?",[obj],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows===0){
            res.send("0");
        }else{
            res.send("1");
        }
    });
});

router.get("/v1/details",(req,res)=>{
    pool.query("select * from jiayong",(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send("0");
        }
    });
});

router.get("/v1/details2",(req,res)=>{
    pool.query("select * from mianbao",(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send("0");
        }
    });
});

router.get("/v1/details3",(req,res)=>{
    pool.query("select * from keche",(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send("0");
        }
    });
});

router.get("/v1/verification",(req,res)=>{
    let uname=req.query.uname;
    pool.query("select uid from user where uname=?",[uname],(err,result)=>{
        if(err) throw err;
        // console.log(result)
        res.send(result[0]);
    });
});

module.exports=router;