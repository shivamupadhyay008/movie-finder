const express = require("express");
const app = express();
const PORT = 4000;
const moviedata = require("./data");
const cors = require("cors");
const bodyParser =require("body-parser")
app.use(cors());
app.get("/", (req, res) => {
  res.json({ success: true, message: "Hello from movie finder endpoint!" });
});
app.route("/getmoviesinfo/:size").get((req, res) => {
  const {size} =req.params;
  const movies = moviedata.slice(0, Number(size));
  res.json({ success: true, movies });
});
app.route("/moviescategory/:category").get((req, res) => {
  const { category } = req.params;
  const movies = moviedata.filter((item) => {
    let answer = item.genres.some(
      (genreItem) => genreItem.toLowerCase() === category.toLowerCase()
    );
    if (answer) return item;
  });
  res.json({ success: true, movies });
});
app.listen(PORT, () => {
  console.log(`Movie finder server started at http://localhost:${PORT}`);
});
