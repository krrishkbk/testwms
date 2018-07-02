'use strict';
const models = require('../../models');
const Sequelize = require('sequelize');

exports.addbranddetails = {
    handler: function (request, reply) {
        var Brand =
            {
                BrandName: request.payload.BrandName,
                CreatedBy: request.payload.LastModifiedBy,
                LastModifiedBy: request.payload.LastModifiedBy,
                CreatedDate: Sequelize.fn('NOW'),
                LastModifiedDate: Sequelize.fn('NOW')
            }

        if (Brand.BrandName == null || Brand.BrandName == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid BrandName",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (Brand.LastModifiedBy == null || Brand.LastModifiedBy == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid LastModifiedBy",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }

        return models.brandmaster.create(Brand)
            .then((Brand) => {
                var Response =
                    {
                        Message: "Successfully Created Brand",
                        Status: "True",
                        Data: request.payload
                    };

                return reply(Response);
            }).catch((ex) => {
                return reply(ex);
            });
    }
}

exports.updatebranddetails = {
    handler: function (request, reply) {

        var Brand =
            {
                BrandID: request.payload.BrandID,
                BrandName: request.payload.BrandName,
                CreatedBy: request.payload.LastModifiedBy,
                LastModifiedBy: request.payload.LastModifiedBy,
                CreatedDate: Sequelize.fn('NOW'),
                LastModifiedDate: Sequelize.fn('NOW')
            }

        if (Brand.BrandID == null || Brand.BrandID == '0' || Brand.BrandID == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid BrandID",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }

        if (Brand.BrandName == null || Brand.BrandName == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid BrandName",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (Brand.LastModifiedBy == null || Brand.LastModifiedBy == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid LastModifiedBy",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }

        return models.brandmaster.update(
            {
                BrandName: request.payload.BrandName,
                LastModifiedDate: Brand.LastModifiedDate,
                LastModifiedBy: Brand.LastModifiedBy
            },
            {
                where:
                    {
                        BrandID: request.payload.BrandID
                    }
            })
            .then(() => {
                var Response = { Message: "Successfully updated Brand Name", Status: "True", Data: request.payload };

                return reply(Response);
            }).catch((ex) => {
                return reply(ex);
            });
    }
}
