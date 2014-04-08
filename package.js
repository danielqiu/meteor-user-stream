Package.describe({
	summary: "Simple Twitter (API 1.1) user stream client in meteor"
});

Npm.depends({'user-stream': '0.0.7'});

Package.on_use(function(api){
	api.add_files(['user-stream.js'], 'server');
	if(api.export)
		api.export('Stream');
});
