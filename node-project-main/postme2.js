const express = require("express");

const app = express();
app.listen(3000, () => {
    // 3000번 포트로 웹 서버 실행
    console.log("Server started. port 3000.");
  });

  app.use(express.json({
    limit:'50mb'
  }));

  app.post('/customer',funchion(req,res){
    console.log(req.body.param);
  })