const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/


app.post('/feedback', (req, res) => {
    // using a pool query to insert values
        pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);`,[req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
        // using req.body to idetify values
        // sending staus
            .then(() => {
                res.sendStatus(201);
                // providing a catch error
            }).catch((error) => {
                console.log('Error with INSERT feedback query', error);
                res.sendStatus(500);
    
            });

        });



/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});




