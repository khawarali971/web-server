var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var middleware = require('./middleware.js');
app.use(middleware.logger)
    //app.use(middleware.authenticate)
app.get('/about', middleware.authenticate, function (req, res) {
    res.send('"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... hhello"');
});
app.use(express.static(__dirname + '/public'))
app.listen(port, function () {
    console.log('listensing to port ' + port)
})
