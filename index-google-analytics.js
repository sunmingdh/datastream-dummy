const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 9982

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

// accept POST requests on the / endpoint
app.post('/platform-analytics/event', (req, res) => {
    // show request json data
    console.log(req.body);
    // send OK response
    res.send('OK');
})



app.listen(port, () => {
  console.log(`Datastream dummy listening on port ${port}`)
})

