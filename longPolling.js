const http = require('http');
const server = http.createServer((request, response) => {
  if (request.url === '/poll') {
    console.log('Poll request received');
    setTimeout(() => { 

      response.writeHead(200, {
        'Content-Type': 'application/json'
      });
      response.end(JSON.stringify({
        message:` Hello World ${new Date().toISOString()}`
      }));
    }, 3000);
  } else {
    response.writeHead(200);
    response.end('Server is running');
  }
    
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});