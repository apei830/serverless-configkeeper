'use strict'

const AWS = require('aws-sdk')
const S3 = new AWS.S3(require('../s3config.js')())
const { BUCKET, getS3FileKey } = require('./common.js')

module.exports = (params, callback) => {
    const source = params[0];
    S3.getObject({
        Bucket: BUCKET,
        Key: getS3FileKey(source),
    }, (err, res) => {
        callback(err, res != null)
    })
};

