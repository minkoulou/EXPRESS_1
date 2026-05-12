import express from "express";
import dotenv from "dotenv/config";
const app=express();
const PORT=process.env.PORT;
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('mon premier serveur avec express')
})

app.listen(PORT, ()=>{
    console.log(`le serveur tourne sur http://localhost:${PORT}`);
});
