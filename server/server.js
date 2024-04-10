const express = require("express");
const app = express();
app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree", "userfour"] });
});
app.listen(5000, () => {
  console.log("server is working on 5000");
});
