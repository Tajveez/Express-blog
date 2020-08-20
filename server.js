const express = require("express");
const articleRouter = require("./routes/articles");
const app = express();
// https://youtu.be/1NrHkjlWVhM?t=237

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "My first Article",
      createdAt: Date.now(),
      description: "This article has a little description",
    },
  ];
  res.render("index", { name: "Tajveez", articles });
});

app.listen("5000");
