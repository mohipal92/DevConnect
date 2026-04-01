import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
dotenv.config()
const port=process.env.PORT || 8000
const app = express()
 
await connectDb();
app.get('/', (req, res) => {
  res.send('Hello World! DevConnect app is running. ')
})

app.listen(port, () => {
  console.log(`DevConnect app  is listening on port ${port}`)
})
