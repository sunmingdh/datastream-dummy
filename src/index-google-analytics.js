const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 9982

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

// accept POST requests on the / endpoint
app.post('/platform-analytics/event', (req, res) => {
    // show request json data
    console.log(JSON.stringify(req.body, null, 2));
    // send OK response
    res.send('OK');
})

// endpoint to show headers
app.get('/header', (req, res) => {
  // Get all headers from the request
  const headers = req.headers;
  // Print headers to console
  console.log('Request headers:', JSON.stringify(headers, null, 2));
  // Send specific JSON response
  res.json({"clientPPT": "XMPPT0000000001"});
})

app.listen(port, () => {
  console.log(`Datastream dummy listening on port ${port}`)
})

