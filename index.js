//create variable and import express in a function 
// const appName = require('express')();
const PORT = 8080;

// express doesn't pass the json in the body by default so add this at last if you used body request anywhere in api otherwise face error
// so setup middleware that tells express to parse json before actual data hits the function that we're using
const express = require('express');
const appName = express();
appName.use(express.json());//here express.json is middleware that will parse body request then show the data

// fire up ur api on the server by calling appName.listen
appName.listen(PORT, () => console.log(`It's alive on http://localhost:${PORT}`))

// add endpoint and take get as a http verb
appName.get('/name', (req,res) => {
    res.status(200).send({
        student:'CSE',
        name:'Pratibha',
        age:'22',
        height:`7.1`,
        profile:'Software Engg.'
    })
});

// another endpoint to post response
appName.post('/name/:id', (req,res) => {
        const { id } = req.params;
        const { name } = req.body;
        const { profile } = req.body;
        const { student } = req.body;

        if(!name && !profile && !age){
            res.status(418).send({message:'You are missing any parameter'})
        }
        res.send({
            name:`${profile} profile with your name ${name} and id ${id} & profile of ${student}`
                });
});

