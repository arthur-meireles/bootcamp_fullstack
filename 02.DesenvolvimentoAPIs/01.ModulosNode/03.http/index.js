import http from 'http';

http
	.createServer((req, res) => {
		if (req.method === 'GET' && req.url === '/teste') {
            res.write('GET EM TESTE');
            res.end();
		}else{
        res.statusCode = 200;
        res.write('Pagina Generica');
        res.end();
        };
	})
	.listen(3000);
