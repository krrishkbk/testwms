'use strict';
const models = require('../../models');
const Sequelize = require('sequelize');

exports.addproductmeasurmentdetails = {
    handler: function (request, reply) {
        var Productmeasurmentdetails =
            {
                AttributeType: request.payload.AttributeType,
                AttributeValue: request.payload.AttributeValue,
                ProductId: request.payload.ProductId,
                CreatedBy: request.payload.LastModifiedBy,
                LastModifiedBy: request.payload.LastModifiedBy,
                CreatedDate: Sequelize.fn('NOW'),
                LastModifiedDate: Sequelize.fn('NOW')
            }

        if (Productmeasurmentdetails.AttributeType == null || Productmeasurmentdetails.AttributeType == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid AttributeType",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (Productmeasurmentdetails.AttributeValue == null || Productmeasurmentdetails.AttributeValue == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid AttributeValue",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }

        if (Productmeasurmentdetails.ProductId == null || Productmeasurmentdetails.ProductId == '0' || Productmeasurmentdetails.ProductId == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid ProductId",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }

        if (Productmeasurmentdetails.LastModifiedBy == null || Productmeasurmentdetails.LastModifiedBy == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid LastModifiedBy",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }

        models.productinfo.findOne({
            where: {
                ProductId: Productmeasurmentdetails.ProductId
            }
        }).then((result) => {
            if (result != null && result.ProductId != '' && result.ProductId > 0) {
                return models.productmeasurmentdetails.create(Productmeasurmentdetails)
                    .then((Productmeasurmentdetails) => {
                        var Response =
                            {
                                Message: "Successfully Created Productmeasurmentdetails",
                                Status: "True",
                                Data: request.payload
                            };

                        return reply(Response);
                    }).catch((ex) => {
                        return reply(ex);
                    });
            }
            else {
                var Response =
                    {
                        Message: "Invalid Details...Please provide valid ProductId",
                        Status: "False",
                        Data: request.payload
                    };

                return reply(Response);
            }
        });

    }
}
 
