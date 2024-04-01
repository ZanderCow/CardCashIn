// server/index.js

const express = require('express');

const PORT = process.env.PORT || 3001;


const app = express();

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
    });
 
//   TODO: 
// - handle post request from the sumbit button on the bank info page
// - send the card and bank info to the payment processor
// - get the money from the payment processor and send it to the users bank account
// - ensure that everything is secure


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
    } );
    