"use strict";

module.exports = function (sequelize, DataTypes) {
    var productinfo = sequelize.define("productinfo", {
        ProductId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ProductGroupId: {
            type: DataTypes.INTEGER
        },
        ProductName: {
            type: DataTypes.STRING
        },
        ProductDescription: {
            type: DataTypes.TEXT
        },
        BrandID: {
            type: DataTypes.INTEGER
        },
        SubCategoryID: {
            type: DataTypes.INTEGER
        },
        MRP: {
            type: DataTypes.DECIMAL(18,2)
        },
        OfferMRP: {
            type: DataTypes.DECIMAL(18, 2)
        },
        HSNCode: {
            type: DataTypes.STRING
        },
        IsActive: {
            type: DataTypes.BOOLEAN
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