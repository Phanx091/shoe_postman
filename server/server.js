const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

const shoesRouter = require("./routes/shoes.routes");

app.use(bodyParser.json());

app.use("/shoes", shoesRouter);

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
