const { getAccountByNameService } = require("../../../service/getAccountByNameService");

async function getAccountByName(req, res) {
    try {
        const { summonerName } = req.params;
        const {status, data} = await getAccountByNameService(summonerName);

        res.status(status).json(data);
    } catch (error) {

        res.status(error.response.status).json({message: error.response.data.status.message});    
    }
}

module.exports = {
    getAccountByName
}
 