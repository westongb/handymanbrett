// set up as a ternary so optimizer will optimize out the code that is never run
const uriBase = "https://handymanslc.herokuapp.com"


// = process.env.NODE_ENV !== 'production'?(
//     "http://localhost:5000"
// ) : (
//     "https://handymanslc.herokuapp.com/"
// )

module.exports.uriBase = uriBase
