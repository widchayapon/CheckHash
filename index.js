const { default: fetch } = require("node-fetch");
const express = require('express');
const app = express();
const port = 3000; // Choose any port you prefer
const cors = require("cors")
app.use(cors())
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/metadefender/:hash', async (req, res) => {
  const hash = req.params.hash;
  try {
    const response = await fetch(`https://api.metadefender.com/v4/hash/${hash}`,{
      method: 'GET',
      headers: {
        accept: 'application/json',
        "apikey": "3a33fda5b64afc33292939d0082a41cc"
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Metadefender:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/hybridanalysis/:hash', async (req, res) => {
  const hash = req.params.hash;
  try {
    const response = await fetch(`https://www.hybrid-analysis.com/api/v2/overview/${hash}`,{
      method: 'GET',
      headers: {
        accept: 'application/json',
        "api-key": "btqfzzrd6f5844a5jwd3e9e639dd91c5i2mshraeaf487829vxcym8ub6b8d49e1"
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Metadefender:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/visrustotal/:hash', async (req, res) => {
  const hash = req.params.hash;
  try {
    const response = await fetch(`https://www.virustotal.com/api/v3/files/${hash}`,{
      method: 'GET',
      headers: {
        accept: 'application/json',
        "x-apikey": "7e5c6e793a1a490f924c62241fb795dfdcb557af3266aeb69c31dbf3a63e6980"
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Metadefender:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Define a route for the homepage
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
