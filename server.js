const express = require('express');
const app = express();
const path = require('path');
const port = 7000;

app.use(express.static(path.join(__dirname, './client/dist')))


app.listen(port, () => {
  console.log(`Server is up and running on port ${port}!`);
});