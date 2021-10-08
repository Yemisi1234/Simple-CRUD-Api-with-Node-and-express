import express from 'express';
import userRoutes from './routes/router.js';


const app = express()

const port = 5005;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/',  userRoutes)
app.get('/', (req, res)=> res.send('Running here too'))
app.listen(port, ()=>{
    console.log('running here')
})