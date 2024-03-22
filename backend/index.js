
import dotenv from 'dotenv'

import connectDB from './db/dbconnector.js'
import app from './expressapp.js';

dotenv.config({
    path: '../.env',
})
const port = process.env.PORT || 4000
connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`http://localhost:${port}`);
    })
}).catch((error)=>{
    console.log('mongo connection failed');
})
app.get('/',(req,res)=>{
    res.send('hello world')
})




