import express from "express" //module js  / asyncronize

const app = express()
app.get("/", (req, res) => {
    res.send("server is ready? yES")
})

app.get("/api/jokes", (req, res) => {
    const jokes = [1,2,3,4,5]
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:{port}`);
})
    