const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 5000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("data.json"));
  res.render("dashboard", data);
});

app.get("/api/dashboard", (req, res) => {
  const data = JSON.parse(fs.readFileSync("data.json"));
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});