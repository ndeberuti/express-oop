const { param } = require('express-validator');
const { requestErrorMiddleware } = require('../middleware/requestErrorMiddleware');

// oop
const HealthController = require("./controller/health");
const HealthService = require("../service/healthService");
const healthControllerInstance = new HealthController(new HealthService());

// fp
const { getAccountByName } = require('./controller/riot/getAccountByNameController');

const bind = app => {
    // oop
    app.get('/health/:id',
    param('id').isLength({ min: 5}),
    requestErrorMiddleware,
    (req, res) => {
        healthControllerInstance.getHealth(req, res)
    });

    // fp
    app.get('/summonerAccount/:summonerName', 
    param('summonerName').isAlphanumeric(),
    requestErrorMiddleware,
    getAccountByName
    )
}

module.exports = {
    bind
}