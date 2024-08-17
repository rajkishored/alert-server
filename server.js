const express = require('express');
const app = express();
const PORT = 3000; // You can change this to any port you prefer

let btn1 = false;
let btn2 = false;

// Route for first button press
app.get('/alert', (req, res) => {
    if (btn1) {
        btn1 = false;
        res.send('pressed');
    } else {
        res.send('not');
    }
    console.log('Alert received for button 1');
    // Handle the alert, e.g., broadcast to Android app or log it
});

app.get('/btnpressed', (req, res) => {
    console.log(btn1);
    btn1 = true;
    res.send('running');
});

// Route for second button press
app.get('/alert2', (req, res) => {
    if (btn2) {
        btn2 = false;
        res.send('pressed2');
    } else {
        res.send('not2');
    }
    console.log('Alert received for button 2');
    // Handle the alert, e.g., broadcast to Android app or log it
});

app.get('/btnpressed2', (req, res) => {
    console.log(btn2);
    btn2 = true;
    res.send('running2');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
