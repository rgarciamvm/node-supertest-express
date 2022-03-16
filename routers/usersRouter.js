import { Router } from "express";

const router = Router();

app.use((req,res,next)=>{
    console.log('---->:userRouter.js');
    next();
});

