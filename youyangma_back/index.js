const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
const cheerio = require("cheerio");
const pretty = require("pretty");

const infected_search_url = "https://chenfan.info/iframe_search/"

const getData = async (url) => {
  console.log(url)
  return axios.get(url)
}

const scrapeData = async (markup) => {
  const $ = cheerio.load(markup);
  const table = $("tbody tr th");
  let cases = []

  table.each((idx, element) => {

    if (idx > 1) {
      cases.push({"date": $(element).text()});
      console.log($(element).text())

    }
  });
  return cases
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
//https://chenfan.info/iframe_search/%E5%88%B6%E9%80%A0%E5%B1%80%E8%B7%AF567
//https://chenfan.info/iframe_search/%25E5%2588%25B6%25E9%2580%25A0%25E5%25B1%2580%25E8%25B7%25AF567%E5%88%B6%E9%80%A0%E5%B1%80%E8%B7%AF567
app.get('/yang/:address', async (request, response) => {
  const address = request.params.address
  console.log("add" + address)
  const reply = await getData(encodeURI(infected_search_url + address));
  const cases = await scrapeData(reply.data);
  console.log(cases)
  response.json(cases)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})