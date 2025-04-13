const cors = require('cors');

const corsConfig = {
    origin: "https://frontend-site-b2agro.vercel.app",
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization']
};

module.exports = cors(corsConfig);