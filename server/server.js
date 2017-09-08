const express = require('express')
const app = express()
const PORT = 3001

app.get('/api/test', (req, res) => {
  const response = {
    "numbers": [
      "one",
      "two",
      "three",
      "four"
    ]
  }

  res.json(response)
})

app.listen(PORT, () => console.log('running'))
