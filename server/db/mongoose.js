var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://nithin:nchandra@ds127962.mlab.com:27962/todos');

module.exports = {mongoose}
