'use strict'

const AWS = require('aws-sdk')
const S3 = new AWS.S3(require('../s3config.js')())
const {BUCKET, getDIR} = require('./common.js')

const getKeys = (dir, contents) => {
    let keys = contents.filter(function (item) {
        return item.Key != dir;
    }).map(function (item, key, ary) {
        let k = item.Key;
        let index = k.indexOf(".json");
        return k.substring(dir.length, index);
    });
    return keys;
}

module.exports = (params, callback) => {
    let dir = getDIR();
    S3.listObjectsV2({
        Bucket: BUCKET,
        Prefix: dir,
    }, (err, res) => {
        // console.log('listObjectsV2', res);
        if (res) {
            callback(null, getKeys(dir, res.Contents))
        } else {
            callback(err, {});
        }
    })
};
