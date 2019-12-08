const express = require('express')
const ejs = require('ejs')

const router = require('./modules/router')

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(router)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))