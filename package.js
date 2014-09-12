Package.describe({
	name: "mrt:user-stream",
	summary: "Simple Twitter (API 1.1) user stream client in meteor",
	author: "Daniel Qiu",
	version: "0.0.7",
	git: "https://github.com/danielqiu/meteor-user-stream.git"
});

Npm.depends({'user-stream': '0.0.7'});

Package.on_use(function(api){
	api.versionsFrom('METEOR@0.9.1.1');

	api.add_files(['user-stream.js'], 'server');
	
	if(api.export)
		api.export('Stream');
});