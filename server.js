const express = require('express');
const app = express();
const PORT = 3000; // You can change this to any port you prefer

let btn = false;

app.get('/alert', (req, res) => {
    if (btn){
        btn = false;
        res.send('pressed');
    }
    else{
        res.send('not');
    }
    console.log('Alert received');
    // Handle the alert, e.g., broadcast to Android app or log it
});


app.get('/btnpressed', (req, res) => {

    console.log(btn);
    btn = true;
    res.send('running');
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
