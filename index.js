require('dotenv').config()

const express = require('express')
// import express from "express"  //common js, module js
const app = express() //this is factory function?

// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello Twitter World!')
})

//concept - hot reloading / nodemon

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})

//now this is production ready