const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4000



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "vash");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const indexRoute = require('./routes/index');

app.all('*', (req, res, next)=>{
    req.msg = "OK"
    next();
})


app.use('/', indexRoute);


app.listen(PORT, ()=> console.log(`Server is listening on http://localhost:${PORT}`));