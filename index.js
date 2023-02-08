const apiKey =  "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"
import { ChatGPTAPI } from 'chatgpt'
import express from'express'
const app = express()
import cors from 'cors'
const port = 3000
app.use(cors())

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})
app.post('/chatgpt', function(req, res) {
  const promt = req.body.promt;

  res.send({
    'data' : main(promt)
  });
});


async function main(promt) {
  const api = new ChatGPTAPI({
    apiKey: apiKey
  })

  const res = await api.sendMessage(promt)
  return res.text
}
app.listen(port, () => {
  console.log(`Example app listening on port 127.0.0.1:${port}`)
})