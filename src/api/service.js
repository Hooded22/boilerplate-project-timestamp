function getResultsObject(date) {
    return {
        unix: date.getTime(),
        utc: date.toUTCString()
    }
}

module.exports = {
    getResultsObject: getResultsObject
}