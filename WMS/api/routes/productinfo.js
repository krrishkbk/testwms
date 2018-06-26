
const productinfo = require('../handler/productinfo');

module.exports = [
    {
        method: 'GET',
        path: '/api/productinfo/getproductdetails',
        config: productinfo.getproductdetails
    }]; 