const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./server/routes/users');
/* import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'; */


const app = express();
app.use(bodyParser.json());
app.use('/users', usersRoutes);

// Dummy data for learing


app.get('/',(req,res)=>{
    res.send(' get paisi bro');
})

app.listen(5000, ()=>{
    console.log('kaam hoitese');
})