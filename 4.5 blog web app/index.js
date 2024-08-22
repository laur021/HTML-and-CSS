import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
//variable that will hold the array of content and datetime
var postArray = []; 



app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs", {
    postArray: postArray
  });
});

//route to add or update
app.post("/submit", (req, res) => {

  const { postContent, postIndex } = req.body;

  //new date and time
const now = new Date();
const dateTimeString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();

if(postIndex){
  //update
  const index = parseInt(postIndex);
  postArray[index].content = req.body.postContent;
  postArray[index].dateTime = dateTimeString;
  console.log(postArray);
}else{
  //add
  postArray.push({ content: req.body.postContent.trim(), dateTime: dateTimeString });
  console.log(postArray);
}
console.log(postArray);
  res.render("index.ejs", {
    postArray: postArray
  });
});

// Route to handle deletion
app.post("/delete", (req, res) => {
  const index = parseInt(req.body.postIndex);
  postArray = postArray.filter(post => post.id !== index);
  postArray.splice(index, 1);
  res.render("index.ejs", {
    postArray: postArray
  });
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
