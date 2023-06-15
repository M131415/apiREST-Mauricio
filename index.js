const express = require('express')
const body_parser = require('body-parser')
const cors = require('cors')
const {jsPDF} = require("jspdf");
const app = express()

//importar variables de entorno locales 
require('dotenv').config({ path:'variables.env'})

app.use(body_parser.urlencoded({extended: true}))
app.use(body_parser.json())
app.use(cors())

const db_manager = require('./persistence/dbmanager')

//leer localhost de variables de entorno
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

app.listen(port, host,() =>{
    console.log('accediendo al puerto')
    
})

app.get('/Descargas', (req,res)=>{
    res.send('Este es un servicio Get para control escolar para mi')
})

//CRUD
//CREATE A POST
app.post('/user', (req, res) =>{
    db_manager.user_create(req, res)
})

//READ - GET
app.get('/user', (req, res) => {
    db_manager.user_details(req, res)
})

// UPDATE PUT/PATH
app.put('/user', (req,res) =>{
    db_manager.boleta_update(req, res)
})

// DELETE
app.delete('/user', (req,res) =>{
    db_manager.boleta_delete(req, res)
})