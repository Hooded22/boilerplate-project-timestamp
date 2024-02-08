function getResultsObject(date) {
    return {
        unix: date.getTime(),
        date: date.toUTCString()
    }
}

module.exports = {
    getResultsObject: getResultsObject
}