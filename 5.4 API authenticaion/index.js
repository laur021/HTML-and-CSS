import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "laur";
const yourPassword = "laur";
const yourAPIKey = "1b57aeac-f458-415f-b36c-96d7baee1503";
const yourBearerToken = "ee974910-0ae9-4ced-ba48-46b26b145ffb";
const baseURL = "https://secrets-api.appbrewery.com/"

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

//getting api without auth
app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(baseURL + "random");
    //convert js object into json object
    res.render("index.ejs", { content : JSON.stringify(response.data) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

//getting api with basic auth
app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(
      baseURL + "all?page=2", {
        auth: {
          username: yourUsername,
          password: yourPassword
        },
    });
    res.render("index.ejs", { content : JSON.stringify(response.data) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});


//getting api with api key
app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(
      baseURL + "filter", {
        params: {
          score: 5,
          apiKey: yourAPIKey
        },
    });
    res.render("index.ejs", { content : JSON.stringify(response.data) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

//getting api with bearer token
app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(
      baseURL + "secrets/2", {
        headers: {
            Authorization: `Bearer ${yourBearerToken}`
        },
    });
    res.render("index.ejs", { content : JSON.stringify(response.data) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
