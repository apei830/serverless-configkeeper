'use strict'

const AWS = require('aws-sdk')
const S3 = new AWS.S3(require('../s3config.js')())
const { BUCKET, getS3FileKey } = require('./common.js')

module.exports = (params, callback) => {
    const source = params[0];
    const key = params[1];
    S3.getObject({
        Bucket: BUCKET,
        Key: getS3FileKey(source),
    }, (err, res) => {
        if (res) {
            let properties = JSON.parse(res.Body.toString());
            callback(err, properties[key]);
        } else {
            callback(err, null)
        }
    })
};
