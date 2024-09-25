const express = require("express");
const { Todo } = require("./models"); // Ensure the path to models is correct
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Home Route to display todos
app.get("/", async (req, res) => {
  const todos = await Todo.findAll();
  res.render("form", { todos });
});

// Add a todo
app.post("/add", async (req, res) => {
  await Todo.create({ title: req.body.title });
  res.redirect("/");
});

// Delete a todo
app.post("/delete/:id", async (req, res) => {
  await Todo.destroy({ where: { id: req.params.id } });
  res.redirect("/");
});

// Mark as done
app.post("/done/:id", async (req, res) => {
  await Todo.update({ isdone: true }, { where: { id: req.params.id } });
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Todo app listening on http://localhost:${port}`);
});
