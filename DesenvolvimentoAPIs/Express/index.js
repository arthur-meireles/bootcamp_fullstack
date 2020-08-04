import express from 'express';

const app = express();
//Config json on express
app.use(express.json());


/*
    REQUEST BODY
*/ 

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
app.post('/one*blue', (req,res)=>{
    res.send(req.body);
});

//Aceita qualquer coisa no lugar de *
app.get('/test(ing)?', (req,res)=>{
    res.send('/test(ing)');
});

//Regular expressions
app.get(/.*Red$/, (req,res)=>{
    res.send('/.*Red$/');
});

/*
        REQUEST PARAMS
*/
app.get('/testParam/:id', (req,res)=>{
    res.send(req.params.id);
});




app.listen(3000, () => {
	console.warn('API Started on port 3000...');
});
