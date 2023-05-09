const express = require('express')

const app = express();
const path = require("path");

app.use('/assets',express.static(path.join(__dirname, 'assets')))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server is running at port", port));
module.exports = app;
