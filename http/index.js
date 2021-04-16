const http = require('http');
const { reverse } = require('./reverse');


// Create server instance
const app = http.createServer();

app.on('request', (req, res) => {

    if(req.url === '/a') {

        if(req.method === 'GET'){
            res.writeHead(200).end('Hello A')
        
        } else if(req.method === 'POST'){
        
            req.on('data', (data) => {
                
                // convert buffert to String
                let resp = data.toString();
                
                // Parse JSON to Obj
                let obj = JSON.parse(resp); 

                // Send response to client
                res.writeHead(200).end(`Hello ${obj.name}, din gamle get!`);


            })

    

        }
        
        else {
            res.writeHead(400).end('Not a GET request')
        }
    }

    else if(req.url === '/reverse') {

        if(req.method === 'POST'){

            req.on('data', (data) => {
                
                // convert buffert to String
                let resp = data.toString();
                
                // Parse JSON to Obj
                let obj = JSON.parse(resp);

                // Reverse it
                let reversed = reverse(obj.text);

                // Send response to client
                res.writeHead(200).end(reversed);

            })



        }
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