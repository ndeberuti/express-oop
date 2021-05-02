

class HealthController {

    constructor(healthService) {
        this.healthService = healthService;
    }

    getHealth(req, res) {
       
        const healthStatus = this.healthService.getHealth(req.params.id)
        
        res.status(200).json(healthStatus)
    }
}

module.exports = HealthController;