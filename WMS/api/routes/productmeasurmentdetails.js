
const productmeasurmentdetails = require('../handler/productmeasurmentdetails');

module.exports = [
     {
        method: 'POST',
        path: '/api/productmeasurmentdetails/addproductmeasurmentdetails',
        config: productmeasurmentdetails.addproductmeasurmentdetails
    } ]; 