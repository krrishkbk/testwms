
const productinfo = require('../handler/brandmaster');

module.exports = [
    {
        method: 'POST',
        path: '/api/brandmaster/addbranddetails',
        config: productinfo.addbranddetails
    },
    {
        method: 'POST',
        path: '/api/brandmaster/updatebranddetails',
        config: productinfo.updatebranddetails
    }]; 