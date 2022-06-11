const http = require('http')

const port = process.env.PORT || 8080
http
  .createServer((req, res) => {
    const url = req.url
    const digits = url.split('/')?.[1]
    const data = {
      number: Math.floor(Math.random() * 10 ** digits),
    }
    res.end(JSON.stringify(data))
  })
  .listen(port)
