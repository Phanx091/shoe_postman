const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

// -- need to npm install pg first 
const pg = require('pg');
// -- a pool is a pool with different connections to your data base
// -- heroku limit is 10 
const Pool = pg.Pool; 
// new class 
const pool = new Pool({
    database: 'shoe_store', // the name of database
    host: 'localhost', // where is the database?
    port: 5432, // default for postgres
    max: 10, // how many connects (queries) at once
    idleTimeoutMillis: 30000 // 30 seconds to try to connect, otherwise cancel query
});

const shoesList = [
    {
      name: "Nike Roshe Run",
      cost: 127
    },
    {
      name: "Nike Huarache",
      cost: 148
    },
    {
      name: "Converse Chuck Taylor low",
      cost: 32
    }
  ];

  app.use(bodyParser.json());

pool.on('connect', () => { // for debugging 
    console.log('postgresql connected');
});
pool.on('error', (error) => { // for debugging 
    console.log('Error with postgres pool', error)
});

app.get('/shoe', (req, res) => {
    console.log("router get", req.body);
    res.send(shoesList);
  });
  

app.post('/shoe', (req,res) => {
    const shoe = req.body;
    pool.query(`INSERT INTO "shoes" ("name", "cost") 
                VALUES ($1, $2);`, [shoe.name, shoe.cost])
        .then((results) => {
            console.log('success on catch post');
            res.sendStatus(200)
        })
        .catch((error) => {
            console.log('error on catch post', error);
            res.sendStatus(500);
        });       
});


// const shoesRouter = require("./routes/shoes.routes");
// app.use("/shoes", shoesRouter);

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
