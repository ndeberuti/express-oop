const { getAccountByName } = require('../accessor/riot/builder');

function getAccountByNameService(summonerName) {
    const result = getAccountByName(summonerName)
    
    return result;
}


module.exports = {
    getAccountByNameService
}