
const productinfo = require('../handler/categorymaster');

module.exports = [
    {
        method: 'POST',
        path: '/api/categorymaster/addcategorydetails',
        config: productinfo.addcategorydetails
    },
    {
        method: 'POST',
        path: '/api/categorymaster/updatecategorydetails',
        config: productinfo.updatecategorydetails
    }]; 