const express = require("express");
const Router = require("../src/routes/index");
const dotenv = require("dotenv");
const Database = require("./config/db/connectDB");
const morgan = require("morgan");
const cors = require("cors");
Database.connect();
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("common"));
Router(app);
app.listen(8000, () => {
  console.log("server is running");
});
