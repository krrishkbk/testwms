
const productinfo = require('../handler/productinfo');

module.exports = [
    {
        method: 'GET',
        path: '/api/productinfo/getproductdetails',
        config: productinfo.getproductdetails
    }, {
        method: 'POST',
        path: '/api/productinfo/addproductdetails',
        config: productinfo.addproductdetails
    }, {
        method: 'POST',
        path: '/api/productinfo/updateproductdetails',
        config: productinfo.updateproductdetails
    }]; 