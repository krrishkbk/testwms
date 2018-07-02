'use strict';

const models = require('../../models');
const Sequelize = require('sequelize');

exports.getproductdetails = {
    handler: function (request, reply) {
        return reply('Here the books will be shown soon...');
    }
}


exports.addproductdetails = {
    handler: function (request, reply) {
        var Product =
            {
                ProductGroupId: request.payload.ProductGroupId,
                ProductName: request.payload.ProductName,
                ProductDescription: request.payload.ProductDescription,
                BrandID: request.payload.BrandID,
                SubCategoryID: request.payload.SubCategoryID,
                MRP: request.payload.MRP,
                OfferMRP: request.payload.OfferMRP,
                HSNCode: request.payload.HSNCode,
                IsActive: request.payload.IsActive,
                CreatedBy: request.payload.LastModifiedBy,
                LastModifiedBy: request.payload.LastModifiedBy,
                CreatedDate: Sequelize.fn('NOW'),
                LastModifiedDate: Sequelize.fn('NOW')
            }

        if (Product.ProductName == null || Product.ProductName == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid ProductName",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (Product.ProductDescription == null || Product.ProductDescription == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid ProductDescription",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (Product.MRP == null || Product.MRP == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid MRP",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (Product.OfferMRP == null || Product.OfferMRP == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid OfferMRP",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (Product.HSNCode == null || Product.HSNCode == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid HSNCode",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (Product.LastModifiedBy == null || Product.LastModifiedBy == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid LastModifiedBy",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (Product.IsActive == null || Product.IsActive == '') {
            Product.IsActive = 0;
        }


        if (Product.ProductGroupId != null || Product.ProductGroupId != '' && Product.ProductGroupId > 0) {
            models.productinfo.findOne({
                where: {
                    ProductId: Product.ProductGroupId
                }
            }).then((Productresult) => {
                if (Productresult != null && Productresult.ProductId != '' && Productresult.ProductId > 0) {
                    Product.ProductGroupId = Product.ProductGroupId
                }
                else {
                    var Response =
                        {
                            Message: "Invalid Details...!Please provide valid ProductGroupId",
                            Status: "False",
                            Data: Product
                        };
                    return reply(Response);
                }
            }).catch((ex) => {
                return reply(ex);
            });
        }

        models.subcategorymaster.findOne({
            where: {
                SubCategoryID: Product.SubCategoryID
            }
        }).then((subcategoryresult) => {
            if (subcategoryresult != null && subcategoryresult.SubCategoryID != '' && subcategoryresult.SubCategoryID > 0) {

                models.brandmaster.findOne({
                    where: {
                        BrandID: Product.BrandID
                    }
                }).then((brandresult) => {
                    if (brandresult != null && brandresult.Brandid != '' && brandresult.Brandid > 0) {
                        return models.productinfo.create(Product)
                            .then((result) => {
                                if (Product.ProductGroupId == null || Product.ProductGroupId == '' && Product.ProductGroupId == 0) {
                                    return models.productinfo.update(
                                        {
                                            ProductGroupId: result.ProductId
                                        },
                                        {
                                            where:
                                                {
                                                    ProductId: result.ProductId
                                                }
                                        }
                                    )
                                        .then((result) => {
                                            var Response =
                                                {
                                                    Message: "Successfully Created Product",
                                                    Status: "True",
                                                    Data: Product
                                                };
                                            return reply(Response);
                                        }).catch((ex) => {
                                            return reply(ex);
                                        });
                                }
                                var Response =
                                    {
                                        Message: "Successfully Created Product",
                                        Status: "True",
                                        Data: Product
                                    };
                                return reply(Response);
                            }).catch((ex) => {
                                return reply(ex);
                            });
                    }
                    else {
                        var Response =
                            {
                                Message: "Invalid Details...Please provide valid BrandID",
                                Status: "False",
                                Data: request.payload
                            };

                        return reply(Response);
                    }
                });
            }
            else {
                var Response =
                    {
                        Message: "Invalid Details...Please provide valid SubCategoryID",
                        Status: "False",
                        Data: request.payload
                    };

                return reply(Response);
            }
        });
    }
}



exports.updateproductdetails = {
    handler: function (request, reply) {
        var Product =
            {
                ProductId: request.payload.ProductId,
                ProductGroupId: request.payload.ProductGroupId,
                ProductName: request.payload.ProductName,
                ProductDescription: request.payload.ProductDescription,
                BrandID: request.payload.BrandID,
                SubCategoryID: request.payload.SubCategoryID,
                MRP: request.payload.MRP,
                OfferMRP: request.payload.OfferMRP,
                HSNCode: request.payload.HSNCode,
                IsActive: request.payload.IsActive,
                CreatedBy: request.payload.LastModifiedBy,
                LastModifiedBy: request.payload.LastModifiedBy,
                CreatedDate: Sequelize.fn('NOW'),
                LastModifiedDate: Sequelize.fn('NOW')
            }
        if (Product.ProductId == null || Product.ProductId == '0' || Product.ProductId == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid ProductId",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }

        if (Product.ProductName == null || Product.ProductName == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid ProductName",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (Product.ProductDescription == null || Product.ProductDescription == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid ProductDescription",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (Product.MRP == null || Product.MRP == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid MRP",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (Product.OfferMRP == null || Product.OfferMRP == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid OfferMRP",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (Product.HSNCode == null || Product.HSNCode == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid HSNCode",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (Product.LastModifiedBy == null || Product.LastModifiedBy == '') {
            var Response =
                {
                    Message: "Invalid Details...!Please provide valid LastModifiedBy",
                    Status: "False",
                    Data: request.payload
                };

            return reply(Response);
        }
        if (Product.IsActive == null || Product.IsActive == '') {
            Product.IsActive = 0;
        }


        if (Product.ProductGroupId != null || Product.ProductGroupId != '' && Product.ProductGroupId > 0) {
            models.productinfo.findOne({
                where: {
                    ProductId: Product.ProductGroupId
                }
            }).then((Productresult) => {
                if (Productresult != null && Productresult.ProductId != '' && Productresult.ProductId > 0) {
                    Product.ProductGroupId = Product.ProductGroupId
                }
                else {
                    var Response =
                        {
                            Message: "Invalid Details...!Please provide valid ProductGroupId",
                            Status: "False",
                            Data: Product
                        };
                    return reply(Response);
                }
            }).catch((ex) => {
                return reply(ex);
            });
        }

        models.subcategorymaster.findOne({
            where: {
                SubCategoryID: Product.SubCategoryID
            }
        }).then((subcategoryresult) => {
            if (subcategoryresult != null && subcategoryresult.SubCategoryID != '' && subcategoryresult.SubCategoryID > 0) {

                models.brandmaster.findOne({
                    where: {
                        BrandID: Product.BrandID
                    }
                }).then((brandresult) => {
                    if (brandresult != null && brandresult.Brandid != '' && brandresult.Brandid > 0) {
                        return models.productinfo.update(
                            {
                                ProductGroupId: Product.ProductGroupId,
                                ProductName: Product.ProductName,
                                ProductDescription: Product.ProductDescription,
                                BrandID: Product.BrandID,
                                SubCategoryID: Product.SubCategoryID,
                                MRP: Product.MRP,
                                OfferMRP: Product.OfferMRP,
                                HSNCode: Product.HSNCode,
                                IsActive: Product.IsActive,
                                LastModifiedDate: Product.LastModifiedDate,
                                LastModifiedBy: Product.LastModifiedBy
                            }, {
                                where:
                                    {
                                        ProductId: Product.ProductId
                                    }
                            }
                        )
                            .then((result) => {
                                var Response =
                                    {
                                        Message: "Successfully Updated Product",
                                        Status: "True",
                                        Data: Product
                                    };
                                return reply(Response);
                            }).catch((ex) => {
                                return reply(ex);
                            });
                    }
                    else {
                        var Response =
                            {
                                Message: "Invalid Details...Please provide valid BrandID",
                                Status: "False",
                                Data: request.payload
                            };

                        return reply(Response);
                    }
                });
            }
            else {
                var Response =
                    {
                        Message: "Invalid Details...Please provide valid SubCategoryID",
                        Status: "False",
                        Data: request.payload
                    };

                return reply(Response);
            }
        });
    }
}


