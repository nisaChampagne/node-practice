require('dotenv').config()

const server = require('./server/server')
//imports 

const port = process.env.PORT

server.listen(port, () => {
    console.log(`\n===================\n Server is running on port ${port}! \n===================\n`)
})//for the port