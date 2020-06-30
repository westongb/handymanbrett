const express = require ("express");
const {Pool, Client} = require('pg')
const app = express();
const cors = require("cors");
const bodyParser = require("body-Parser");
const pool = new Pool();
const client = new Client({
    user: "postgres",
    password: "Abc123890",
    port: 5432,
    database: "services"

}) 
const port = process.env.PORT || 5000;


client.connect().then(() => console.log('connected'))
.then(()=> client.query("select * from brett_services"))
.then(results => console.table(results.rows))
.catch(err => console.error('connection error', err.stack))
.finally(()=> client.end)

app.use(express.json());
app.use(cors());
app.use(bodyParser());




var config = {
    user: "postgres",
    password: "Abc123890",
    port: 5432,
    database: "services"
}


app.get("/services", async (req, res) => {
    const rows = await readServices();
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(rows))
})


app.post("/postservices", async (req, res) => {
    
    try{
        console.log(req.body);
        const service_name = req.body.service_name;
        const job_time = req.body.job_time;
        const price = req.body.price;
        // const data = JSON.stringify([service_name, job_time, price])
        const newService = await client.query(
            "INSERT INTO brett_services (service_name, job_time, price) VALUES ($1, $2, $3)" , 
            [service_name, job_time, price]);
       await res.json(newService)
    } catch (err){
        console.log(err.message)
    }
})


async function readServices() {
    try {
    const results = await client.query("select * from brett_services");
    console.log(results.rows)
    return results.rows;
    }
    catch(e){
        return "this didn't work" + e;
    }
}



app.listen(port, () => console.log(`Listening on port ${port}`));