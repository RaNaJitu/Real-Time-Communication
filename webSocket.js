const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });


server.on('connection', (ws) => { 
  console.log('WebSocket connection established');
  ws.send('Chai aur code');
  ws.on('message', (message) => {
    console.log('Received message:', message);
    ws.send('Hello from server',message);
  });
  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
  ws.on('error', (error) => {
    console.log('WebSocket error:', error);
  });
});

console.log('WebSocket server is running on port ws://localhost:8080');