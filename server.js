import express from 'express'
import dotenv from 'dotenv'


import moviesRouters from './routes/movies.js'

dotenv.config()
//initialize express
const app = express()
const PORT = process.env.PORT || 3005

//parse the body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//use routes
app.use('/api/movies',moviesRouters)

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`)
})
