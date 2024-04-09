const express = require("express");

const PORT = 3000;

const app = express();

app.use((req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});
