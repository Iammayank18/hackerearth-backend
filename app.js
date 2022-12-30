const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(cors());

require("./src/db/conn");
const authRouter = require("./src/router/auth");
app.use(authRouter);

app.listen(PORT, () => {
  console.log("Server started on port 4000");
});
