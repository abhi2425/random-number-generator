const http = require('http')

const port = process.env.PORT || 8080
http
  .createServer((req, res) => {
    const url = req.url
    const digits = +url.split('/')?.[1]
    let random = Math.random()
    while(random<= 0.10) random= Math.random()
    const data = {
      number: Math.floor(random * 10 ** digits)
    }
    res.end(JSON.stringify(data))
  })
  .listen(port)
