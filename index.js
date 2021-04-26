const express = require('express');
const sequelize = require('./config/connection');
const Donut = require("./models/Donut");
const Bread = require("./models/Bread");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("hello")
})

const apiDonutRoutes = require("./controllers/apiDonut");
app.use("/api/donuts",apiDonutRoutes)

const apiBreadRoutes = require("./controllers/apiBread");
app.use("/api/bread",apiBreadRoutes)


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
