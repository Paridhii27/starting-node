// Import the express library and assign it to a variable
import express from 'express'

// Create an instance of an express application 
const app = express()

// Set the port the application will be running on
const port = process.env.PORT || 3001 

// Set up a response for the root path of the application
// two parameters: 1. route (particular location or file path is found) 2. runs parameter req,res at that location
// what do you want to do when you get a specific request so response is defined
// '/' is to refer to homepage
app.get('/', (req, res) => {
  res.send("Write an instruction for a drawing here. For example: draw a line across the page, draw 10 circles of different sizes, draw a duck.")
})

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}` )
})