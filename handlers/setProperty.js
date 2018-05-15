'use strict'

const AWS = require('aws-sdk')
const S3 = new AWS.S3(require('../s3config.js')())
const {BUCKET, getS3FileKey} = require('./common.js')

const update = (source, properties, callback) => {
    properties['@timestamp'] = new Date().getTime().toString();
    S3.upload({
        Bucket: BUCKET,
        Key: getS3FileKey(source),
        Body: JSON.stringify(properties),
    }, (err, res) => {
        console.log(err, res)
        callback(err, {})
    })
}

module.exports = (params, callback) => {
    const source = params[0];
    const key = params[1];
    const value = params[2];
    S3.getObject({
        Bucket: BUCKET,
        Key: getS3FileKey(source),
    }, (err, res) => {
        let properties = {};
        if (res) {
            properties = JSON.parse(res.Body.toString());
        }
        properties[key] = value;
        update(source, properties, callback);
    })
};
