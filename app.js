// importing dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const auth0 = require('./auth0');


// configuring Express
const app = express();
app.use(bodyParser.json());
app.use(cors());


// defining test profiles array and endpoints to manipulate it
const profiles = [
    { name: 'John Snow', phone: '+1-908-000-0001' },
    {name: 'John Doe', phone: '+1-908-000-0001' },
    { name: 'John Smith', phone: '+1-908-000-0001' }
];


app.get('/profiles', auth0(['read:profiles']), (req, res) => res.send(profiles));
app.post('/profiles', auth0(['add:profiles']), (req, res) => {
  profiles.push(req.body);
  res.send();
});



// starting Express
app.listen(3000, () => console.log('Example app listening on port 3000!'));




