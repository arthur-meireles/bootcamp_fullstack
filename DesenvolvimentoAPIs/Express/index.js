import express from 'express';

const app = express();

app.all('/testAll', (req, res) => {
	res.send(req.method);
});

//Aceita /teste ou /test
app.get('/tester?', (_,res)=>{
    res.send('a')
});

//Aceita /buzz ou /buzzzzzzzzzz
app.get('/buzz+', (_,res)=>{
    res.send('Foi')
});

//Aceita qualquer coisa no lugar de *
app.get('/one*blue', (req,res)=>{
    res.send(req.path);
});

//Aceita qualquer coisa no lugar de *
app.get('/test(ing)?', (req,res)=>{
    res.send('/test(ing)');
});


app.listen(3000, () => {
	console.warn('API Started on port 3000...');
});
