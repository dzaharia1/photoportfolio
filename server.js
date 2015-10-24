var express = require('express');
var app = express();

app.use(express.static(__dirname + '/', {extensions:['html']}));

var port = (process.env.VCAP_APP_PORT || '4000');

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('app is listening on port ' + port);
});
