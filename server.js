const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnection=require('./db')
const data =require("./data.js")
const seedRouter = require('./routes/seedRoutes.js')
const categoryRouter = require('./routes/categoryRoutes.js')

app.use('/api/seed',seedRouter)
app.use('/api/categories',categoryRouter)
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api/orders',(req,res)=>{
    res.send(data.orders)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))