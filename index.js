const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')



app.get('/', (req, res) => res.send('Oprah'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})