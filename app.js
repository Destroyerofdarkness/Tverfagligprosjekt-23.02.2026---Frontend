const express = require("express");

const cors = require("cors");

const path = require("path");

require("dotenv").config();

const app = express();

const default_routes = require("./routes/default_routes")

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.set("view engine", "ejs")

app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: process.env.HOST,
    methods: ["GET","POST", "DELETE","PUT"],
    allowedHeaders: ["Content-Type","Authorization"]
}))

app.use(default_routes)

app.listen(process.env.PORT,"0.0.0.0", async()=>{
console.log("Server is running on port:", process.env.PORT)
});
