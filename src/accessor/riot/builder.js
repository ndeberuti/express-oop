const config = require('config');
const axios = require('axios');

const { baseUrl, getAccountByNameUrl, apiKey} = config.get('riot');

function getAccountByName(summonerName) {
    const headers = {
       'X-Riot-Token': apiKey
    };
    
    // @ts-ignore
    return axios({
      method: 'get',
      headers,
      url: `${baseUrl}${getAccountByNameUrl.replace(':summonerName', summonerName)}`,
    });
}

module.exports = {
  getAccountByName
}
