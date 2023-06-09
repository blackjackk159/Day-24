require("dotenv").config();
require("./dbInit");
const express = require("express");
const app = express();
const postRoutes = require("../routes/post");
const errorHandler = require("../utils/errorHandler");

// Body parser
app.use(express.json()); //to JSON
app.use(express.urlencoded({ extended: true })); //recognize strings or arrays


app.use("/posts", postRoutes);

// error handler
// 錯誤處理的 middleware 相較一般 middleware 會多一個 err 引數
app.use(errorHandler);

module.exports = app;
