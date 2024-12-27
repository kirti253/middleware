const express = require("express");
const app = express();
function isOdlEnoughMilddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "sorry you are not of age",
    });
  }
}
app.get("/ride1", isOdlEnoughMilddleware, function (req, res) {
  res.status(411).json({
    msg: "sorry you are not of age",
  });
});
app.get("/ride2", isOdlEnoughMilddleware, function (req, res) {
  res.json({
    msg: "you hve succsessfully riden",
  });
});
app.listen(3000);
