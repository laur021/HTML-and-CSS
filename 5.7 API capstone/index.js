
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke/";

let joketype;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
try {
  const result = await axios.get(API_URL + joketype);
  res.render("index.ejs", { 
    setup: result.data.setup,
    delivery: result.data.delivery
  });
} catch (error) {
    res.status(404).send(error.message);
}
  });

app.post("/", async (req, res) => {
  try {
      joketype = req.body.joketype;
      res.redirect("/");
  } catch (error) {
      res.status(404).send(error.message);
  }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
