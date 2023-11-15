const express = require('express')
const app = express();
const PORT = process.env.PORT || 4000;

const logger = (req, res, next)=>{
    req.msg = `This is from logger !!!`;
    next();
}

const auth = (req, res, next)=>{
    if(req.query.username === 'peter'){
        next();
    }else{
        res.send('Access Denied');
    }
}


app.use(logger);

app.get('/', (req, res)=>{
    res.send(`Hello World, ${req.msg}`)
});

app.get('/login', auth, (req, res)=>{
    console.log(req.query)
    res.send(`You are logged In, ${req.msg}`)
});



app.listen(PORT ,()=> console.log(`Server is listening on http://localhost:${PORT}`))
