const axios = require("axios").default()
const http = http = require('http');
const url = "http://api.sportradar.us/nfl/official/{access_level}/stream/{language_code}/statistics/subscribe?api_key={your_api_key}"


async function getSportsRadarStas(){
  const endpoint= url
  axios.get(endpoint)
  .then(resp=>{
    console.log(resp.data)
  }).catch(error=>{
    console.error(error)
  })
}
