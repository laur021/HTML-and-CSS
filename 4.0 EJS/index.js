import express from "express";

const app = express();
const port = 3000;
const today = new Date();
var day = today.getDay();

var dayType = (day == 0 || day == 6) ? "weekend" : "weekdays"

app.get("/", (req, res) =>{
    res.render("index.ejs", {
        daytype: `a ${dayType}`,
        advice: "Its time to work hard",
    });
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});