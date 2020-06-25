const express = require ("express");
const app = express();
const cors = require("cors");
const pool =  require("./servicedb");
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());
app.get("/services", async (req, res) => {
    const rows = await readServices();
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(rows))
})


app.post("/postservices", async (req, res) => {
    try{
        const {service_name} = req.body;
        console.log(req.body)
        const newService = await pool.query(
            "INSERT INTO service (service_name) VALUES($1)",
            [service_name]
        );
    } catch (err){
        console.log(err.message)
    }
})


async function readServices() {
    try {
    const results = await pool.query("select id, text from service");
    return results.rows;
    }
    catch(e){
        return "this didn't work" + e;
    }
}



app.listen(port, () => console.log(`Listening on port ${port}`));