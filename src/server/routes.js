
const { health } = require("./controller/health");

const bind = app => {
    app.use('/health', health);
}

module.exports = {
    bind
}