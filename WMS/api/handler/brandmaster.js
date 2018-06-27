'use strict';
const models = require('../../models');

exports.addbranddetails = {
    handler: function (request, reply) {
        return models.brandmaster.create(request.payload)
            .then((brandmaster) => {
                return reply(brandmaster);
            }).catch((ex) => {
                return reply(ex);
            });
    }
}

exports.updatebranddetails = {
    handler: function (request, reply) {
        return models.brandmaster.update(
            {
                BrandName: request.payload.BrandName
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
