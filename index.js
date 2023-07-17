const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const shopRoutes = require("./routes/shop");
const cors = require("cors");
app.use(cors());
//To serve state files like images
app.use(express.static("public"));

//middleware to manage the requests
app.use(shopRoutes);
app.listen(PORT, console.log(`The server is listening at ${PORT}`));
