import express from 'express';
const app = express();

app.use(express.json());

//localhost:3000/0.png = exibe a imagem
app.use(express.static('public'));
//localhost:3000/images/0.png = exibe a imagem
app.use('/images',express.static('public'));


app.listen(3000,()=>{
    console.log('Listening on port 3000...')
})