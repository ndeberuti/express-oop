const { validationResult } = require('express-validator');

async function requestErrorMiddleware(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
}

module.exports = { 
    requestErrorMiddleware 
}

