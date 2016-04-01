var express = require('express')
var bodyParser = require('body-parser')

var port = process.env.PORT || 3000

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))

var users = [
  {username: 'goku', password: '1234'},
  {username: 'vegeta', password: '1234'},
  {username: 'gohan', password: '1234'},
  {username: 'krilin', password: '1234'}
]

app.get('/get', function (request, response) {
  response.send('Hi')
  console.log('request a get!')
})

app.post('/login', function (request, response) {
  console.log('request a post!')
  var username = request.body.username
  var password = request.body.password
  console.log('username: ' + username)
  console.log('password: ' + password)

  var status = 'Error'

  for ( var i = 0 ; i < 4 ; i++ ) {
    var user = users[i]
    if (user.username === username && user.password === password) {
      status = 'Ok'
    }
  }

  response.json({
    status: status,
    username: username
  })
})

app.listen(port, function () {
  console.log('Start engine. Listening on port: ' + port + ' for http')
})
