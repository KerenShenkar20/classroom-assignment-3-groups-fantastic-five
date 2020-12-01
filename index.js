const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({response: "index route"}));
app.get('/playlist', (req,res) => res.send("playlist page")); //Yarin
app.put('/language', (req,res) => res.send("language")); //chen 
app.delete('/playlist', (req,res) => res.send("Playlist Deleted")); //Omri
app.get('/songs', (req,res) => res.send("Songs page")); // Dana
app.post('/login',(req, res) => {
    var user_name = req.body.user;
    var password = req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    res.send("Loged in")
}); // Saar Pernik


/*  Every team member has to add a route to this file, like the one above
    For example: 
    Student A writes the route for GET /playlist
    and student B writes the route for PUT /language */

app.listen(port, () => console.log(`Listening on port ${port}`));
