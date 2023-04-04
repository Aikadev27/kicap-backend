const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("./config/mongodb.config");

const router = require("./routers");
const port = process.env.PORT || 3000;

app.use(
  cors({
    // origin: "http://localhost:8080",
    origin: "*",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router(app);

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
