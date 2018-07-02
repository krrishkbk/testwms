
const brandmaster = require('../handler/brandmaster');

module.exports = [
    {
        method: 'POST',
        path: '/api/brandmaster/addbranddetails',
        config: brandmaster.addbranddetails
    },
    {
        method: 'POST',
        path: '/api/brandmaster/updatebranddetails',
        config: brandmaster.updatebranddetails
    }]; 