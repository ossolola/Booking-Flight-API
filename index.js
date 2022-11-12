const express = require("express");

const {json} = require("express");

const routes = require("./routes/flightRoute");



const app = express();

app.use(express.json());



app.use("/flight", routes);




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`);
})