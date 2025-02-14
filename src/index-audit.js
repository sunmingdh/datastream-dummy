const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 8100

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

// accept POST requests on the / endpoint
app.post('/write/audit', (req, res) => {
    // show request json data
    console.log(JSON.stringify(req.body, null, 2));
    // send OK response
    res.send('OK');
})



app.listen(port, () => {
  console.log(`Datastream dummy listening on port ${port}`)
})

