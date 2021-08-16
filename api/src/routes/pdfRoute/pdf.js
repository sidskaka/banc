var express = require('express')
var router = express.Router()

const controller = require('../../controllers/pdfController/pdf')

// GET a pdf
router.get(('/fetch_pdf'), (req, res, next) => {
   // middleware
   console.log(`Request from: ${req.originalUrl}`)
   console.log(`Request type: ${req.method}`)
   next();
}, controller.getDocPdf)
// ADD an pdf
router.post(('/create_pdf'), controller.addNewDocPdf)

module.exports = router
