// const express = require('express');
// const router = express.Router();

const router = require('express').Router();


router.route('/save')
    .get((req, res)=>{
        console.log(req.query)
        res.end()
    })
    .post((req, res)=>{
        console.log(req.body)
        res.end()         
    })

    

router.get('/xhr-action', (req, res)=>{
    let num = Number(req.query.num) * 2 ;
    res.json({num})
})
router.get('/ajax', (req, res)=>{
    res.render('ajax');    
})
// router.get('/save', (req, res)=>{
//     console.log(req.query)
//     res.end()
// })

router.get('/form', (req, res)=>{
    res.render('form');
})



router.get('/', (req, res)=>{
    fetch(`https://dummyjson.com/users`)
    .then( res => res.json())
    .then( data => res.render('index', { 
        title: "Express", 
        age: 20, 
        users: data.users
    }))
    
    //res.send(`<b>Hello World from Router</b> ${req.msg}`);
});


module.exports  = router;