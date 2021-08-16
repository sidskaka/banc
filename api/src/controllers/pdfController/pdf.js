const pdf = require('html-pdf');
const pdfTemplate = require('../../templates/pdfTemplate')
console.log(process.cwd())
const pathFile = process.cwd()+'/src/templates';

// fetching pdf document
exports.getDocPdf = (req, res) => {
    res.sendFile(`${pathFile}/pdfFile.pdf`)
}
// create pdf document
exports.addNewDocPdf = (req, res) => {
   console.log(req.body.user)
    
   pdf.create(pdfTemplate(req.body.operations, req.body.user, req.body.account), {}).toFile(pathFile+'/pdfFile.pdf', (err) => {
      if(err) {
         res.send(Promise.reject());
      }

      res.send(Promise.resolve());
   });
}
