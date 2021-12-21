const http = require("http");

const puerto = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  /*   res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //res.writeHead(200, {'Content-Type':'text/plain' })
  res.write('Bienvenidos a Node.js Server Side') */
  res.end("Bienvenidos a Node.js Server Side");
})
server.listen(port, () => {
  console.log(`Server running at ${puerto}`);
})
server.on('error', (err)=> console.log(`No se pudo levantar el servidor en el puerto ${puerto}`))
