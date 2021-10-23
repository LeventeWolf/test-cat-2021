const express = require("express");
const path = require("path");
const { Pool } = require("pg");
const index = express();
const routeDog = require('./routes/route-cats');
const PORT  = process.env.PORT || 8080;

index.set("view engine", "ejs");
index.set("views", path.join(__dirname, "views"));
index.use(express.static(path.join(__dirname, "public")));
index.use(express.urlencoded({ extended: false }));
index.use(routeDog);


index.listen(PORT, () => {
  console.log("App listening at: http://localhost:8080/");
});