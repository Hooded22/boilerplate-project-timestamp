const {Router} = require("express")
const {getResultsObject} = require("./service");
const isDateValid = require("../../utils/isDateValid");

const apiRouter = Router();

apiRouter.get("/hello", function (req, res) {
    res.json({greeting: 'hello API'});
});



apiRouter.get('/:date?', (req, res) => {
    try {
        const date = req.params.date;

        if(!date) {
            return res.json(getResultsObject(new Date()))
        }

        const dateNumber = parseInt(date)
        const jsDate = isNaN(date) ? new Date(date) : new Date(dateNumber)

        if(!isDateValid(jsDate)) {
            throw new Error()
        }

        const result = getResultsObject(jsDate)

        return res.json(result)

    } catch (e) {
        return res.status(400).json({ error : "Invalid Date" })
    }
})

module.exports = {apiRouter}