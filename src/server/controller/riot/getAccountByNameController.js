const { getAccountByNameService } = require("../../../service/getAccountByNameService");

async function getAccountByName(req, res) {
    try {
        const { summonerName } = req.params;
        const {status, data} = await getAccountByNameService(summonerName);

        res.status(status).json(data);
    } catch (error) {
        console.log(JSON.stringify(error))

        res.status(400).json({message: error.message});    
    }
}

module.exports = {
    getAccountByName
}
