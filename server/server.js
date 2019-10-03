const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

const server = express()

const authRouter = require('./routes/auth')

server.use(morgan('dev'))//does logging
server.use(helmet())///security headers
server.use(express.json())/// tells express that I will use json

server.use('/auth', authRouter)

module.exports = server
///express is actual server

