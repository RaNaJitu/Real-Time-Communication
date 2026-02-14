const http = require('http');
const server = http.createServer((req, res) => {
  console.log('Server Sent Events request received');
  if (req.url === '/events') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });
    res.write('data: Hello World\n\n');
    const interval = setInterval(() => {
      // res.write(`data: Hello World ${new Date().toISOString()}\n\n`);
      res.write(`data: Hello World\n\n`);
    }, 1000);
    req.on('close', () => {
      clearInterval(interval);
      res.end();
    });
  } else {
    res.writeHead(200);
    res.end('Server is running');
  } 
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});