import express from "express";
import 'dotenv/config';
import cors from "cors";
import passport from "passport";
import session from "express-session";
import "./passport/githubAuth.js";
import userRoutes from "./routes/userRoutes.js";
import exploreRoutes from "./routes/exploreRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import connectMongoDB from "./db/connectDB.js";

const app = express();

app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());


app.get("/", (req,res)=>{
    res.send("Server is ready");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.listen(5000, () =>{
    console.log("Server Started on port 5000");
    connectMongoDB();
});