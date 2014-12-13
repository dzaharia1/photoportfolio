var express = require('express');

var app = express();

app.use(express.static(__dirname + '/', {extensions:['html']}));

var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.VCAP_APP_PORT || '4000');

app.listen(port, host);
console.log('App is running on port ' + port);
