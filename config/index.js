var configValues = require('./config');

module.exports = {

	getDbConnectionString: function (){
		return 'mongodb://' + configValues.uname + ':'
		+ configValues.pwd + '@ds049150.mlab.com:49150/node-finalapp';
	}
}
