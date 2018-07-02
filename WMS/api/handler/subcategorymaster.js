'use strict';
const models = require('../../models');
const Sequelize = require('sequelize');

exports.addsubcategorydetails = {
    handler: function (request, reply) {
        var SubCat =
            {
                SubCategoryName: request.payload.SubCategoryName,
                CategoryID: request.payload.CategoryID,
                CreatedBy: request.payload.LastModifiedBy,
                LastModifiedBy: request.payload.LastModifiedBy,
                CreatedDate: Sequelize.fn('NOW'),
                LastModifiedDate: Sequelize.fn('NOW')
            }

        if (SubCat.SubCategoryName == null || SubCat.SubCategoryName == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid SubCategoryName",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }

        if (SubCat.CategoryID == null || SubCat.CategoryID == '0' || SubCat.CategoryID == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid categoryID",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }

        if (SubCat.LastModifiedBy == null || SubCat.LastModifiedBy == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid LastModifiedBy",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }

        models.categorymaster.findOne({
            where: {
                CategoryID: SubCat.CategoryID
            }
        }).then((result) => {
            if (result != null && result.CategoryID != '' && result.CategoryID > 0) {
                return models.subcategorymaster.create(SubCat)
                    .then((SubCat) => {
                        var Response =
                            {
                                Message: "Successfully Created SubCategory",
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
                        Message: "Invalid Details...Please provide valid CategoryID",
                        Status: "False",
                        Data: request.payload
                    };

                return reply(Response);
            }
        });

    }
}

exports.updatesubcategorydetails = {
    handler: function (request, reply) {
        var SubCat =
            {
                SubCategoryID: request.payload.SubCategoryID,
                CategoryID: request.payload.CategoryID,
                SubCategoryName: request.payload.SubCategoryName,
                LastModifiedBy: request.payload.LastModifiedBy,
                LastModifiedDate: Sequelize.fn('NOW')
            }
        if (SubCat.SubCategoryID == null || SubCat.SubCategoryID == '0' || SubCat.SubCategoryID == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid SubCategoryID",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (SubCat.SubCategoryName == null || SubCat.SubCategoryName == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid SubCategoryName",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (SubCat.LastModifiedBy == null || SubCat.LastModifiedBy == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid LastModifiedBy",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }

        return models.subcategorymaster.update(
            {
                SubCategoryName: SubCat.SubCategoryName,
                CategoryID: SubCat.CategoryID,
                LastModifiedDate: SubCat.LastModifiedDate,
                LastModifiedBy: SubCat.LastModifiedBy
            },
            {
                where:
                    {
                        SubCategoryID: SubCat.SubCategoryID
                    }
            })
            .then(() => {
                var Response =
                    {
                        Message: "Successfully updated SubCategory Details",
                        Status: "True",
                        Data: request.payload
                    };

                return reply(Response);
            }).catch((ex) => {
                return reply(ex);
            });
    }
}
