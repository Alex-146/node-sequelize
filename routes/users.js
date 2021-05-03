const express = require("express");
// const { Op } = require("sequelize");
const User = require("../models/User");

const router = express.Router();

router.get("/", (req, res) => {
  User.findAll()
    .then(users => {
      // raw or plain
      const data = users.map(user => user.get({ plain: true }));

      res.render("users", {
        title: "Users",
        users: data
      });
    })
    .catch(error => {
      res.status(500).send(error.message);
      console.log(error);
    });
});

router.get("/json", (req, res) => {
  User.findAll()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      res.status(500).send(error.message);
      console.log(error);
    });
});

router.get("/remove", (req, res) => {
  const { username } = req.query;

  User.findOne({ 
      where: { 
        name: username 
      }
    })
    .then(user => {
      if (user === null)
        res.send("User doesn't found");
      else {
        user.destroy()
          .then(() => {
            res.send("User deleted!");
          })
          .catch(error => {
            res.status(500).send(`Delete error = ${error.message}`);
            console.log(error);
          });
      }
    })
    .catch(error => {
      res.status(500).send(error.message);
      console.log(error);
    });
});

router.get("/create", (req, res) => {
  res.render("create", {
    title: "Create"
  });
});

router.post("/create", (req, res) => {
  const { name, age } = req.body;

  const user = { name, age };

  User.create(user)
    .then(createdUser => {
      res.json(createdUser);
    })
    .catch(error => {
      res.status(500).json(error.message);
      console.log(error);
    });
});

module.exports = router;
