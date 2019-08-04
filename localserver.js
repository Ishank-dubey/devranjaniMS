var staticServer = require('http').createServer((req, res)=>{
	let path = '/index.html'
		if (req.url!='/'){
			path = 	req.url;
			if(req.url.match('css'))
				res.writeHead(200, { 'Content-Type': 'text/css' });
			if(req.url.match('js'))
				res.writeHead(200, { 'Content-Type': 'text/javascript' });
			if(req.url.match('svg'))
				res.writeHead(200, { 'Content-Type': 'image/svg+xml' });//type="image/"
			if(req.url.match('ico'))
				res.writeHead(200, { 'Content-Type': 'image/x-icon' });
		}else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
		}
	console.log(path);
	let fs = require('fs');
	try{
		let buffer = fs.readFileSync('./dist'+path);
		res.end(buffer);
	}catch (e){
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end('this resourse is not existing');
	}
	
}).listen(8888,()=>{
	console.log('listening on port '+staticServer.address().port+" on address "+staticServer.address().address);
});