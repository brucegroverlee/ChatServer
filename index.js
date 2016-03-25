var express = require('express')
var bodyParser = require('body-parser')

var port = process.env.PORT || 3000

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))

app.get('/get', function (request, response) {
  response.send('Hi')
  console.log('get a request!')
})

app.post('/login', function (request, response) {
  console.log('post a request!')
  var username = request.body.name
  var password = request.body.password
  console.log('username: ' + username)
  console.log('password: ' + password)
  response.json({
    status: 'ok',
    user: username
  })
})

app.listen(port, function () {
  console.log('Start engine. Listening on port: ' + port + ' for http')
})
