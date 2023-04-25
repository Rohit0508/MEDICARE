const express=require('express');
const app =express();
app.get('',(req,resp)=>{
    resp.send("working perfect");
});
app.listen(4500);