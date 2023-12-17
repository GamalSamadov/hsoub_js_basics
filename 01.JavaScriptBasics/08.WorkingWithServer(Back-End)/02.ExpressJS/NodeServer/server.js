const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use("/public", express.static(__dirname + "/public"))

app.get('/', (req, res) => {
  res.sendFile("public/index.html", {root: __dirname});
});

app.get("/user", (req, res) => res.json([
  { id: 1, name: "ibrahim", email: "ibrahim@mail.com"},
  { id: 2, name: "samar", email: "samar@mail.com"},
  { id: 3, name: "heba", email: "heba@mail.com"},
]))

app.post("/user", (req, res) => {
  console.log(req.body);
  res.json({ message: "User added successfully!" })
})

app.listen(3000, () => console.log("Server is listening on port: 3000!"))
