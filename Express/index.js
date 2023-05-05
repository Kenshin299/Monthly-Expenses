const express = require('express');
// const fs = require("fs");
// const https = require('https');
const app = express();
const port = 3000;

// https.createServer(
//     {
//       key: fs.readFileSync("key.pem"),
//       cert: fs.readFileSync("cert.pem"),
//     },
//     app
//   )
//   .listen(4000, () => {
//     console.log("serever is runing at port 4000");
// });

app.disable('x-powered-by');

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

app.get('/', (req, res) => {
  res.send('Hello World!')
})