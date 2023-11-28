import express from "express"
import cors from "cors"
import "dotenv/config"
import Hello from "./test.js";
import connectDB from "./db.js";


import UserRoutes from './routes/userRoutes.js'

const server = express()

server.use(cors())

server.use(express.json())
connectDB();

const PORT = 4000

Hello(server)

UserRoutes(server)


server.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${process.env.PORT || PORT}`);
});
