import { connect } from "mongoose";
import app from "./app";
import { connectDB } from "./config/database";

const PORT = 6000;

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Servidor corriendo en http://localhost:"+PORT+".:3");
    })
}).catch(err=>console.error(err));