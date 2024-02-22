import express from "express";
import 'dotenv/config';
import userRoutes from "./routes/userRoutes.js";
import exploreRoutes from "./routes/exploreRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());


app.get("/", (req,res)=>{
    res.send("Server is ready");
});

app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.listen(5000, () =>{
    console.log("Server Started on port 5000");
});