const express=require('express');
const app =express();
app.get('',(req,resp)=>{
    resp.send("working");
});
app.listen(4500);