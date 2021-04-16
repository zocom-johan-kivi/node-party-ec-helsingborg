const http = require('http');

// Create server instance
const app = http.createServer();

app.on('request', (req, res) => {

    console.log(req.method)

   if(req.url === '/a') {
       res.writeHead(200).end('Hello A')
   }

   else if(req.url === '/b') {
       res.writeHead(200).end('Hello B')
   }

   else {
       res.writeHead(404).end('No data for you!')
   }
    
})

// Start listen
app.listen(80, () => {
    console.log('Server is up n running!');
})