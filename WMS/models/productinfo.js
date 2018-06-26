"use strict";

module.exports = function (sequelize, DataTypes) {
    var productinfo = sequelize.define("productinfo", {
        ProductId: {
            type: DataTypes.INTEGER
        },
        ProductName: {
            type: DataTypes.STRING
        },
        CreatedBy: {
            type: DataTypes.STRING
        },
        CreatedDate: {
            type: DataTypes.DATE
        },
        LastModifiedBy: {
            type: DataTypes.STRING
        },
        LastModifiedDate: {
            type: DataTypes.DATE
        } 
     
    }, { freezeTableName: true, timestamps: false });

    productinfo.removeAttribute('id');
    return productinfo;
};