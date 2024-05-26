require('dotenv').config({ path: './config.env' });

import express from "express";
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

//connect to db
connectDB()

app.use(express.json());
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/private", require("./routes/private"));

//ErrorHandler (Should be last piece of middleware)

const server = app.listen(
    PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    }
)
process.on("unhandledRejection", (error, promise) => {
    console.log(`Logged Error: ${error}`);
    server.close(() => process.exit(1))
})
