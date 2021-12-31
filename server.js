let express = require("express");
let cors = require("cors");
let router = require("./routes/router");

let app = express();
app.use(express.json());

let cors_opt = {
  origin: "https://localhost:3000"
};
app.use(cors(cors_opt));

app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running");
});
