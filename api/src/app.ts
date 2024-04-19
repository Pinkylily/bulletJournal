import express from "express"

const app = express();

const port = 3000; // Use port 3000 by default if not specified

app.get("/", (req, res) => {
  res.send("Hello world !");
});

// creates and starts a server for our API on a defined port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});