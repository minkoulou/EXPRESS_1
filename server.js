import express from "express";
import dotenv from "dotenv/config";
const app=express();
const PORT=process.env.PORT;
app.use(express.json());

const blog=[
    {id:1,titre:"cameroun",descripion:"cameroun pays de paix"},

    {id:2,titre:"nigeria",description:"peninsulle de bakasi"}
]

app.get('/blogs',(req,res)=>{
    res.json(blog)
})

app.get('/blogs/:id',(req,res)=>{
     const id=Number(req.params.id);
    const newblog=blog.find(b => b.id === id);
    if(!newblog){
        res.status(404);
        res.json({message:"blog non retrouve"});
    }else{
      res.status(200)
      res.json(newblog);
         }
})

app.post('/blogs',(req,res)=>{
     const {titre,description} = req.body;
     if(!titre || !description){
        res.status(404).json({message:'champs manquant'})
     }else{
     const nouveaublog={
        id:blog.length + 1,
        titre,
        description
     }

     blog.push(nouveaublog);
     res.status(201).json(nouveaublog)
    }
})

app.put('/blogs/:id',(req,res)=>{
    const {titre,description}=req.body
    const id=parseInt(req.params.id);
    const index=blog.find(b => b.id === id)
    blog[index]={...req.body}

    res.status(200).json('ressource mis a jour')

})

app.delete('/blogs/:id',(req,res)=>{
    const id=req.params.id;
    const index=blog.find(b => b.id === id)
    blog.splice(index,1);
    res.status(200).json({message:'blog supprime avec success'})
})

app.listen(PORT, ()=>{
    console.log(`le serveur tourne sur http://localhost:${PORT}`);
});
