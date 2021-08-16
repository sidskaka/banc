let DBNAME = "myFirstDatabase"
let URL = "mongodb+srv://sids:sids@cluster0.qf8xn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//let URL = `mongodb+srv://Sidy_inno:sidspardise@cluster0.jngfm.mongodb.net/${DBNAME}`
module.exports = {
    //url: "mongodb+srv://sids:sids@cluster0.qf8xn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    url: URL, // dev
    //url: "mongodb+srv://Sidy_inno:sidspardise@cluster0.aptyc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    dbname: DBNAME
}
