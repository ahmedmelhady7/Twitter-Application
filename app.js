var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

    var html = '<!DOCTYPE html><html><head><title>My Title</title></head><body>';
    html += 'Some more static content';
    //html += 'Some more static content';
    //html += 'Some more static content';
    //html += 'Some dynamic content';
    html += '</body></html>';

    response.end(html, 'utf-8');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/ ya 3m hadi');