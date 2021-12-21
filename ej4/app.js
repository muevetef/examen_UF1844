const express = require('express')
// const path  =require('path')
const app = express()

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', (req, res)=>{  
  res.render('index', {title: 'Home'})
})

app.get('/productos', (req, res)=>{  
    const productos = [
        {name: "aaaa", precio: 123},
        {name: "bbb", precio: 123},
        {name: "ccc", precio: 123},
        {name: "ddd", precio: 123},
        {name: "afff", precio: 123}
    ]
    res.render('productos', {title: 'Productos', productos})
})

app.use((req, res) =>{ 
    res.status(404).render('404', {title: '404'})
})

app.listen(3000, console.log("Express arrancado..."))