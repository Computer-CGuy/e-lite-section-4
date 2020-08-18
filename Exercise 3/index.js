const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
  res.send('Hello, world!')
})

app.get('/hello/:*', (req, res) => {
	var name = req.url.split("/")[2].replace(":","");
  	res.send(`Hello, ${name}!`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})