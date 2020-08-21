const express = require ("express");
const {Pool, Client} = require('pg')
const app = express();
const cors = require("cors");
const bodyParser = require("body-Parser");
const pool = new Pool();
require('dotenv').config("./process.env")
const client = new Client({
    user: "postgres",
    password: "Abc123890",
    port: 5432,
    database: "services"

}) 
const port = process.env.PORT || 5000;
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var serviceList = require('./Service_list.json');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

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


app.get("/servicelist", async (req, res) => {
    
          res.send(JSON.stringify(serviceList))
})
 


app.post("/postservices", async (req, res) => {
    console.log(req.body);
    try{
        
        const service_type = req.body.serviceType
        const service_name = req.body.serviceName;
        const job_time = req.body.job_time;
        const price = req.body.price;
        const service_description = req.body.description;
        const service_img = req.body.img;
        // const data = JSON.stringify([service_name, job_time, price])
        const newService = await client.query(
            'INSERT INTO brett_services ( service_name, job_time, price, service_description, service_img, service_type) VALUES ($1, $2, $3, $4, $5, $6)' , 
            [ service_name, job_time, price, service_description, service_img, service_type]);
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


app.post("/send-email", async (req, res) => {

    
    const {
        recipient,
        message = "lets try doing a messaage and see if this actually sends",
        name = "lets try this again",
        sender

    } = req.body;

    console.log(recipient)



    const msg = {
        to: "westongb@outlook.com",
        from: "westongb@outlook.com.com",
        subject: name,
        text: message,
        html: `<strong>${message}</strong>`,
      };

      console.log(msg)
      sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);
 
    if (error.response) {
      console.error(error.response.body)
    }
  });
//ES8
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
 
    if (error.response) {
      console.error(error.response.body)
    }
  }
    
})
});


if(process.env.NODE_ENV === 'production') {
  //Static folder
  app.use(express.static(_dirname + '/public/'))
}
// handle SPA

app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.listen(port, () => console.log(`Listening on port ${port}`));