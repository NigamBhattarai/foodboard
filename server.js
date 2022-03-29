const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnection=require('./db')
const data =require("./data.js")


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api/categories',(req,res)=>{
    res.send(data.categories)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))