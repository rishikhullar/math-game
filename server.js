var config = require ('./config').values

var app = require ('./app').getApp(config)

var port = process.env.PORT || 3000;
app.listen(port, function() {
console.log("Listening on " + port);
});

//create handler for socket.io
var race = require ('./lib/modules/race')
race.createRace(app);


process.on('SIGINT', function () {
	app.close();
	console.log();
	console.log('Shutting down server..');
	process.exit(0);
});