const express = require("express");
const app = express();
const PORT = 3000;
const moviedata = require("./data");
app.get("/", (req, res) => {
  res.json({ success: true, message: "Hello from movie finder endpoint!" });
});
app.route("/getmoviesinfo/:size").get((req, res) => {
  const { size } = req.params;
  const movies = moviedata.slice(0, Number(size));
  res.json({ success: true, movies });
});
app.listen(PORT, () => {
  console.log(`Movie finder server started at http://localhost:${PORT}`);
});
