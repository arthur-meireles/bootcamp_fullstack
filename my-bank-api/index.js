import express from 'express';
import accountsRouter from './routes/accounts.js'

const app = express();
app.use(express.json());

app.use('/account', accountsRouter);



app.listen(3000, () => {
    console.log('Server runing on port 3000...')
}