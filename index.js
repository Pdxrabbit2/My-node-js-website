const http = require('http');
const fs = require('fs').promises;

const host = '0.0.0.0';
const port = 8080;

const requestListener = function (req, res) {
  switch (req.url) {
    case '/':
      fs.readFile('index.html').then((contents) => {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(contents);
      });
      break;
    case '/page1':
      fs.readFile('page1.html').then((contents) => {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(contents);
      });
      break;
    case '/page2':
      fs.readFile('page2.html').then((contents) => {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(contents);
      });
      break;
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log('Server up!!');
});
