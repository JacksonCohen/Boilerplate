const express = require("express");
const app = express();
const port = 7000;

app.use(express.static("client/dist"));

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}!`);
});
