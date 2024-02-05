const http  = require('http');

const server = http.createServer((req, res)=>{

    if(req.url === '/'){
        res.end('welcome to my page');
    }
    else if (req.url === '/about'){
        res.end('welcome to about page')
    }
    else{
        res.end(`
        <h1>OOps</h1>
        
        `);
    }
    
    
})

server.listen(3000);