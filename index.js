const PORT = 8000;

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//test

app.get("/", (req, res) => {
  res.send("node deploy test 3");
});

app.use(require("./routes/getRoutes"));
app.use(require("./routes/deleteRoutes"));
app.use(require("./routes/postRoutes"));
app.use(require("./routes/updateRoutes"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
