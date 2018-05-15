const CONFIGKEEPER_DIR = "configkeeper/";

const BUCKET = process.env.BUCKET;

const getS3FileKey = (source) => {
    return CONFIGKEEPER_DIR + source + ".json";
};

const getDIR = () => {
    return CONFIGKEEPER_DIR;
}

const jsonRPCResult = (result) => {
    if (result == null) {
        result = {}
    }
    return {
        result: result
    }
};

module.exports = {
    BUCKET,
    getDIR,
    getS3FileKey,
    jsonRPCResult
}