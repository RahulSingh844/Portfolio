import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/db.js";

dotenv.config();

const app = express();
ConnectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({success: true ,message: "Server is running"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});