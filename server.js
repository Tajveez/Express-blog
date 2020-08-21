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
      createdAt: new Date(),
      description: "This article has a little description",
    },
    {
      title: "My Second Article",
      createdAt: new Date(),
      description: "This article has a little description",
    },
  ];
  res.render("articles/index", { name: "Tajveez", articles });
});

app.listen("5000");
