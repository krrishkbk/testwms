'use strict';
const models = require('../../models');
const Sequelize = require('sequelize');

exports.addcategorydetails = {
    handler: function (request, reply) {
        var Cat =
            {
                CategoryName: request.payload.CategoryName,
                CreatedBy: request.payload.LastModifiedBy,
                LastModifiedBy: request.payload.LastModifiedBy,
                CreatedDate: Sequelize.fn('NOW'),
                LastModifiedDate: Sequelize.fn('NOW')
            }

        if (Cat.CategoryName == null || Cat.CategoryName == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid CategoryName",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (Cat.LastModifiedBy == null || Cat.LastModifiedBy == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid LastModifiedBy",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }

        return models.categorymaster.create(Cat)
            .then((Cat) => {
                var Response =
                    {
                        Message: "Successfully Created Category",
                        Status: "True",
                        Data: request.payload
                    };

                return reply(Response);
            }).catch((ex) => {
                return reply(ex);
            });
    }
}

exports.updatecategorydetails = {
    handler: function (request, reply) {
        var Cat =
            {
                CategoryID: request.payload.CategoryID,
                CategoryName: request.payload.CategoryName,
                LastModifiedBy: request.payload.LastModifiedBy,
                LastModifiedDate: Sequelize.fn('NOW')
            }
        if (Cat.CategoryID == null || Cat.CategoryID == '0' || Cat.CategoryID == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid categoryID",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (Cat.CategoryName == null || Cat.CategoryName == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid CategoryName",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (Cat.LastModifiedBy == null || Cat.LastModifiedBy == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid LastModifiedBy",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }

        return models.categorymaster.update(
            {
                CategoryName: Cat.CategoryName,
                LastModifiedDate: Cat.LastModifiedDate,
                LastModifiedBy: Cat.LastModifiedBy
            },
            {
                where:
                    {
                        CategoryID: Cat.CategoryID
                    }
            })
            .then(() => {
                var Response =
                    {
                        Message: "Successfully updated Category Name",
                        Status: "True",
                        Data: request.payload
                    };

                return reply(Response);
            }).catch((ex) => {
                return reply(ex);
            });
    }
}
