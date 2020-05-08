const https = require('https');
const fs = require('fs');

const startServer = (app, config) => {
	try {
		app.listen(
			config.get("PORT"), () =>
			console.log(`Server started on PORT ${config.get("PORT")}.`)
		);
	} catch(err) {
		console.error(err.message);
    	res.status(500).send("Server errror");
	}
}

module.exports = startServer;