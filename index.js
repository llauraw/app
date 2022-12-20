var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    n1 = 5;
    n2 = 10;
    sum = n1+n2;
    res.write(n1+'+'+n2+'='+sum);
    console.log(n1+'+'+n2+'='+sum);
    res.end();
}).listen(process.env.PORT || 3000);