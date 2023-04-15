const app = require("./app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/appointments", (req, res) => {
    res.send("Getting appointments...");
    res.end();
});

app.post("/appointments", (req, res) => {
    res.send("Posting appointments");
    res.send(req);

    // 1 route
    // Post comes in from the webhook
    res.end();
});
