import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    res.render("index.ejs", { data: response.data });
    console.log(response.data);
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  try {
    const actType = req.body.type
    const actNo = req.body.participants
    //need kuhanin yung api link na nafilter using value ng participants at type
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${actType}&participants=${actNo}`
    );
    const result = response.data
    console.log(result);
    //kaya may random dito possible kasi na multiple ang lumabas na result
    //dapat isa lang kaya need ng index number sa result
    res.render("index.ejs", { 
      data: result[Math.floor(Math.random() * result.length)] 
    });

  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("solution.ejs", {
      error: "No activities that match your criteria.",
    });
  }
});


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
