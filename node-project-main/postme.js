const express = require("express");

const app = express();
app.listen(3000, () => {
  // 3000번 포트로 웹 서버 실행
  console.log("Server started. port 3000.");
});
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/about", function (req, res) {
  res.send("Hello World!");
});
