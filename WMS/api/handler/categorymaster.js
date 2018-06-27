'use strict';
const models = require('../../models');
const Sequelize = require('sequelize');

exports.addcategorydetails = {
    handler: function (request, reply) {
        var Cat =
            {
                CategoryName: request.payload.CategoryName,
                CreatedBy: request.payload.CreatedBy,
                LastModifiedBy: request.payload.CreatedBy,
                CreatedDate: Sequelize.fn('NOW'),
                LastModifiedDate: Sequelize.fn('NOW')
            }

        return models.categorymaster.create(Cat)
            .then((Cat) => {
                return reply(Cat);
            }).catch((ex) => {
                return reply(ex);
            });
    }
}

exports.updatecategorydetails = {
    handler: function (request, reply) {
        return models.categorymaster.update(
            {
                CategoryName: request.payload.CategoryName
            },
            {
                where:
                    {
                        CategoryID: request.payload.CategoryID
                    }
            })
            .then(() => {
                var Response = { Message: "Successfully updated Category Name", Status: "True", Data: request.payload };

                return reply(Response);
            }).catch((ex) => {
                return reply(ex);
            });
    }
}
