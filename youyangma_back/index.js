const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
const cheerio = require("cheerio");
const pretty = require("pretty");

const infected_search_url = "https://chenfan.info/iframe_search/"

const getData = async (url) => {
  return axios.get(url)
}

const scrapeData = async (markup) => {
  const $ = cheerio.load(markup);
  const table = $("tbody tr th");
  let cases = []

  table.each((idx, element) => {

    if (idx > 1) {
      cases.push({"date": $(element).text().replace('2022-', '')});

    }
  });
  return cases
}


app.use(cors())

app.get('/yang/:address', async (request, response) => {
  const address = request.params.address
  const reply = await getData(encodeURI(infected_search_url + address));
  const cases = await scrapeData(reply.data);
  response.json(cases)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})