require('dotenv').config();
const {Client} = require('pg')
const cors = require('cors')
const express = require('express')


const app = express()
app.use(cors())
const port = process.env.PORT || 8080

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
        rejectUnauthorized: false
  }
})

client.connect()

app.get('/data', async (req, res) => {
    try{
        const result = await client.query('SELECT * FROM requests order by id DESC')
        res.json(result.rows)
    } catch(err) {
        console.error(err)
        res.status(500).json({err: 'Ошибка сервера'})
    }
})

app.listen(port,() => {
    console.log('Сервер работает на http://localhost:%s', port)
})