const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

const infected_search_url = "https://chenfan.info/iframe_search/%E5%88%B6%E9%80%A0%E5%B1%80%E8%B7%AF567"

const getData = async (url) => {
  try {
    const response = await axios.get(url)
    const data = response.data
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

const positive_cases = [
    {
        date: "04-08"
    },
    {
        date: "04-07"
    },
    {
        date: "04-06"
    },
    {
        date: "04-04"
    },
];

app.use(cors())

app.get('/yang', (request, response) => {
  response.json(positive_cases)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})