require('babel-polyfill') // Add for IE10, IE11 support.
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.example.config.js')

const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(5099, 'localhost', (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:5099')
})

