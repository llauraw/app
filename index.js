var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    n1 = 5;
    n2 = 10;
    res.write(n1+'+'+n2+'='+n1+n2);
    res.end();
}).listen(process.env.PORT || 3000);