```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running operation using setTimeout
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000); // Operation runs after 5 seconds, without blocking the event loop
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```