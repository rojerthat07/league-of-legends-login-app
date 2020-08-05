const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
require("dotenv/config"); //dotenv allows you to separate secrets from your source code.

const app = express();
const DATABASE_NAME = process.env.DATABASE_NAME; //to access the data in .env file.
const PORT = 5000;

app.use(express.json()); //middleware
app.use("/api", authRoute);
app.use("/api", postRoute);

mongoose //connecting to the database
  .connect(DATABASE_NAME, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log("Server is running"));
  })
  .catch((err) => {
    let errorMess = typeof err == "String" ? err : err.errorMess;
    console.log(errorMess);
  });
