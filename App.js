const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.render("App", { numGridRows: 5, initialItemsPerRow: 3});
})


//--------------------------------------------------------------
app.listen(3000, function() {
    console.log("Server started on port 3000.")
})