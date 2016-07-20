var express = require('express');
var app = express();
var port = 3000;
var middleware = {
    authenticate: function (req, res, next) {
        console.log('private route hit!')
        next()
    },
    logger: function (req, res, next) {
        console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl)
        next()
    }
}
app.use(middleware.logger)
    //app.use(middleware.authenticate)
app.get('/about', middleware.authenticate, function (req, res) {
    res.send('"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."');
});
app.use(express.static(__dirname + '/public'))
app.listen(port, function () {
    console.log('listensing to port ' + port)
})
