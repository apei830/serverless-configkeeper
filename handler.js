'use strict';
const services = require('./handlers/services.js');
const {jsonRPCResult} = require('./handlers/common.js');

function makeResponse(error, result) {
    let statusCode = error && error.statusCode || 200
    statusCode = statusCode == 200 ? 200 : 500;
    return {
        statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(jsonRPCResult(result)),
    }
}

module.exports.configkeeper = (event, context, callback) => {
    let request = JSON.parse(event.body);
    let method = request['method'];
    let params = request['params'];
    let service = services[method];
    service.call(this, params, (error, result) => {
        const response = makeResponse(error, result);
        callback(null, response);
    });
};
