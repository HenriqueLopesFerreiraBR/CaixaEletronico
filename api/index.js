const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config();


const port = process.env.PORT;


const UserRouter = require('./src/routes/UserRouter')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use('/api/user',UserRouter)

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
