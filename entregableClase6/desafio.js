import express from 'express';
import ProductManager from './manejoDeArchivos.js';
// const pm = require('manejoDeArchivos');

const pm = new ProductManager();
const app = express();



app.get('/products/', (req, res) => {

    const { limit } = req.query
    pm.getProducts().then(products => {
        const limitProduts = products.slice(0, limit)
        res.send(limitProduts)})
        .catch(err => res.status(500).send(err))
})

app.get('/products/:pid', (req, res) => {
    console.log(req.params.pid);

    pm.getProductById(req.params.pid)
        .then(product =>{
            
            (res.send(product))
        })
        .catch(err => res.status(500).send(err))
})

app.listen(8080, () => {
    console.log('Estoy escuchando el puerto 8080...');
});