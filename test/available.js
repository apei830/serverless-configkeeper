const request = require('request');
const {API_BASE} = require('./env.js');

requestBody = {
    "method": "available",
    "params": ["xxx"]
}

request({
    url: API_BASE,
    method: "POST",
    json: true,   // <--Very important!!!
    body: requestBody
}, function (error, response, body) {
    console.log(body);
});