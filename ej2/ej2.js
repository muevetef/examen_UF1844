const express = require('express')
const app = express()

//Manejar las rutas
//`Bienvenidos a Nodejs desde express`
app.get('*', (req, res)=>{
    res.send(`Bienvenidos a Nodejs desde express`)
})

const puerto = 5000
const http = app.listen(5000, console.log(`Express corriendo en el puerto ${puerto}`))
http.on('error', (err) => `No se pudo levantar el servidor en el puerto ${puerto}`)
