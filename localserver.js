let baseDir = __dirname,
nodePath = require('path'),
fileExt = nodePath.extname;
var staticServer = require('http').createServer((req, res)=>{
	let path = '';
		 if (req.url!='/'){
			path = 	nodePath.join(baseDir,req.url);
			switch (fileExt(path)){
			case '.xml':
			res.writeHead(200, { 'Content-Type': 'text/xml' });
			break;
			case '.css':
			res.writeHead(200, { 'Content-Type': 'text/css' });
			break;
			case '.js':
			res.writeHead(200, { 'Content-Type': 'text/javascript' });
			break;
			case '.ico':
			res.writeHead(200, { 'Content-Type': 'image/x-icon' });
			break;
			case '.svg':
			res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
			break;
			case '.html':
			res.writeHead(200, { 'Content-Type': 'text/html' });
			break;
			default:	
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			}
		}else {
			//check if another dir or a .html was supplied in command line meant to serve
			path = nodePath.join(baseDir,process.argv[2]?process.argv[2]:''
				,process.argv[2] && process.argv[2].match(/.+\.html/g)?'':'/index.html');
			res.writeHead(200, { 'Content-Type': 'text/html' });
		}
	
	let fs = require('fs');
	try{
		let stream = fs.createReadStream(path);
		stream.on('error',function(e) {
            res.writeHead(404);
            res.end();
       });
		stream.pipe(res);
	}catch (e){
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end();
	}
	
}).listen(8888,()=>{
	console.log('listening on port '+staticServer.address().port+" on address "+staticServer.address().address);
});