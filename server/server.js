import express from 'express'
import bodyParser from 'body-parser'
import exercices from './routes/exercices'


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Api routes, add test att localhost:5000/api/test/addTest
app.use('/api/exercices', exercices)

// Base routes
app.get('/', (req, res) => {
  res.send({
    message: 'Hello world'
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server running on port ${port}`))

export default app
