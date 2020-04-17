const https = require('https');
const fs = require('fs');

const startServer = (app, config, PORT) => {
	try {
		if (config.get("protocol") === "https"){
	  		https.createServer({
				key: fs.readFileSync(config.get("httpsKeyFile")),
				cert: fs.readFileSync(config.get("httpsCertFile"))
			}, app).listen(PORT, () => {
				console.log(`Server started on Port ${PORT}`);
			});
		} else if (config.get("protocol") === "http") {
	  		app.listen(PORT, () => {
				console.log(`Server started on Port ${PORT}`);
	  		});
		} else {
	  		throw Error("Protocol must be either http or https");
		}
	} catch(err) {
		console.error(err.message);
    res.status(500).send("Server errror");
	}
}

module.exports = startServer;