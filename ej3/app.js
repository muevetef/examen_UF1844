const express = require('express')
// const path  =require('path')
const app = express()

app.get('/', (req, res)=>{
    //res.sendFile(__dirname + 'index.html')
    //res.sendFile(path.join(__dirname, 'index.html'))
    res.sendFile('./index.html', {root: __dirname})

})

app.get('/productos', (req, res)=>{
   
    res.status(404).sendFile('./productos.html', {root: __dirname})

})

app.use((req, res) =>{

    res.status(404).sendFile('./404.html', {root: __dirname})
})

app.listen(3000, console.log("Express arrancado..."))