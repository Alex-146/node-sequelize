const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const db = require("./config/database");

// https://stackabuse.com/adding-a-postgresql-database-to-a-node-js-app-on-heroku/

const app = express();

app.use(express.urlencoded({ extended: true }));

const hbs = handlebars.create({
  defaultLayout: "main",
  extname: "hbs"
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Website"
  });
});

app.use("/users", require("./routes/users"));

const PORT = process.env.PORT ?? 5050;

app.listen(PORT, () => {
  console.log(`Server has been started at ${PORT}...`);

  db.authenticate().then(() => {
    console.log("Connected to db!");
  }).catch(error => {
    console.log(error);
  });

});
