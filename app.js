const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log(`Incoming request to ${req.url}`);
    next();
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));