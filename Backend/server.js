import express from "express";
import 'dotenv/config';
import cors from "cors";
import passport from "passport";
import session from "express-session";
import path from "path";
import "./passport/githubAuth.js";
import userRoutes from "./routes/userRoutes.js";
import exploreRoutes from "./routes/exploreRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import connectMongoDB from "./db/connectDB.js";

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
console.log("dirname", __dirname);

app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

// app.use(cors());


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.use(express.static(path.join(__dirname, "/Frontend/dist")));

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

app.listen(PORT, () =>{
    console.log(`Server Started on Port ${PORT}`);
    connectMongoDB();
});