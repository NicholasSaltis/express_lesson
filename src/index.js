const express = require("express");
const app = express()

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({message: "this is json"});
});

app.listen(PORT, HOST, () => {
    console.log("server is running!")
})