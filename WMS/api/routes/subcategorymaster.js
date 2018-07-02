
const subcategorymaster = require('../handler/subcategorymaster');

module.exports = [
    {
        method: 'POST',
        path: '/api/subcategorymaster/addsubcategorydetails',
        config: subcategorymaster.addsubcategorydetails
    },
    {
        method: 'POST',
        path: '/api/subcategorymaster/updatesubcategorydetails',
        config: subcategorymaster.updatesubcategorydetails
    }]; 