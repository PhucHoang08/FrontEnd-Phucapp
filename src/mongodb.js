const express = require("express")
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const routes = require("../routes")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require("cors")
const morgan = require("morgan")
dotenv.config();

const app = express()
const port = process.env.PORT

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use(morgan("common"))
routes(app)
const productRoutes = require('../routes/ProductRouter')
app.use(`/api/product`,productRoutes)

//CONNECT TO DATABASE
mongoose.set("strictQuery", false);
mongoose.connect(`${process.env.MONGODB_URL}`)
    .then(()=>{
        console.log("Connect database success!")
    })
    .catch((err)=>{
        console.log(err)
    })


// RUN SEVER
app.listen(port,()=>{
    console.log("Server is running in port: " + port)
})
