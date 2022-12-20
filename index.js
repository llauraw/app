var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    const query = require('url').parse(req.url, true).query;
    const n1 = parseInt(query.n1, 10) || 4;
    const n2 = parseInt(query.n2, 10) || 10;
    sum = n1+n2;
    res.write(n1+'+'+n2+'='+sum);
    console.log(n1+'+'+n2+'='+sum);
    res.end();
}).listen(process.env.PORT || 3000);