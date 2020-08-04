import express from 'express';

const app = express();

app.all('/testAll', (req, res) => {
	res.send(req.method);
});

//Aceita /teste ou /test
app.get('/test?', (_,res)=>{
    res.send('a')
});

//Aceita /buzz ou /buzzzzzzzzzz
app.get('/buzz+', (_,res)=>{
    res.send('Foi')
});

app.listen(3000, () => {
	console.warn('API Started on port 3000...');
});
