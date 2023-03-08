require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const orderRoutes = require('./routes/order');
const kitchenRoutes = require('./routes/kitchen');
const contextRoutes = require('./routes/context');

// database connection
connection();

// Middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/meeting-rooms/:id", orderRoutes);
app.use("/kitchen-list", kitchenRoutes);
app.use("/context", contextRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))