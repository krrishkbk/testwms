
const categorymaster = require('../handler/categorymaster');

module.exports = [
    {
        method: 'POST',
        path: '/api/categorymaster/addcategorydetails',
        config: categorymaster.addcategorydetails
    },
    {
        method: 'POST',
        path: '/api/categorymaster/updatecategorydetails',
        config: categorymaster.updatecategorydetails
    }]; 