const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
require("dotenv").config();

const db = require("./models");

app.use(express.json());

const regs = [
  { username: "Smith", course: "Flutter" },
  { username: "Peter", course: "Web Tech 1" },
];

const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  //Bearer TOKEN
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      res.sendStatus(401);
    }
    console.log(user);
    req.user = user;
    next();
  });
};

app.get("/regs", authenticate, (req, res) => {
  const result = regs.filter((r) => r.username === req.user.username);
  res.status(200).json(result);
});

app.post("/signup", async (req, res) => {
  console.log(req.body);

  const user = await db.User.create({ ...req.body });
  res.status(200).json(user);
});

app.post("/login", async (req, res) => {
  //const username = req.body.username;
  const { username, password } = req.body;

  try {
    const user = await db.User.login(username, password);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.end();
    //res.json({ message: "invalid Username of Password" });
  }

  //   const user = { username };
  //   const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  //res.status(200).json(token);
});

app.listen(3000, () => console.log(`Server is listening on 3000`));
