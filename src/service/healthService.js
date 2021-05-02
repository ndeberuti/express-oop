class HealthService {

    getHealth(id) {
        return {
            id,
            status: 'all good'
        }
    }
}
module.exports = HealthService;