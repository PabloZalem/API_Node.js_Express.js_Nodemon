const express = require('express')
const app = express()

app.use(express.json())

app.use("/products", require('./routes/productRoutes'))

app.listen(8000, () => {
    console.log('Servidor subiu na porta 8000')
})