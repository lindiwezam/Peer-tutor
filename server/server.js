import express from "express";
import mongoose from "mongoose";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import tutorRoutes from "./routes/tutorRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import socketSetup from "./socket.js";

dotenv.config();
const app = express();

//Routes
app.use("/api/tutors", tutorRoutes);
app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 3000;

console.log(process.env);

mongoose.connect(process.env.MONGO_URI).catch(err => console.error(err));

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/api', (req, res) => {
    res.send('API is workingproperly');
});

const SERVER_PORT = process.env.PORT || 3000;

const server = http.createServer(app);

// START THE SERVER CORRECTLY
server.listen(SERVER_PORT, () => 
    console.log(`Server running on http://localhost:${SERVER_PORT}`)
);

socketSetup(server);