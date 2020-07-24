const express=require("express");
const bodyParser=require("body-parser");
const router=require("./user_router/router.js");
const app=express();
app.listen(8080,()=>{
    console.log("服务器已启动...")
});
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use("/ajax",router);