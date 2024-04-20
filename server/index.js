const express = require("express");

require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());

// !Enable CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

// !Simple Route
app.get("/", (req, res) => {
  res.send("TITLE");
});

// !Routes
const tutorialRoute = require("./routes/tutorial");
app.use("/tutorial", tutorialRoute);

let port = process.env.APP_PORT;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
