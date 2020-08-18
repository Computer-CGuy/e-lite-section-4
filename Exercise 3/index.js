const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
  res.send('Hello, world!')
})

app.get('/hello/:id', (req, res) => {
  	res.send(`Hello, ${req.params.id}!`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})