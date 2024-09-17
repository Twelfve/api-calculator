const express = require('express');

function addition(req, res, next) {
    const {n1, n2} = req.params;
    res.send(`La suma de ${n1} + ${n2} es ${parseInt(n1) + parseInt(n2)}`);
}

function multiply(req, res, next) {
    const {n1, n2} = req.body;
    console.log(req);
    
    res.send(`La multiplicación de ${n1} * ${n2} es ${parseInt(n1) * parseInt(n2)}`);
}

function divide(req, res, next) {
    const {n1, n2} = req.body;

    if (parseInt(n2) === 0) {
        return res.status(400).send('No se puede dividir entre 0');
    }
    res.send(`La división de ${n1} / ${n2} es ${parseInt(n1) / parseInt(n2)}`);
}

function pow(req, res, next) {
    const {n1, n2} = req.body;
    res.send(`La potencia de ${n1} ^ ${n2} es ${Math.pow(parseInt(n1), parseInt(n2))}`);
}

function substraction(req, res, next) {
    const {n1, n2} = req.params;
    res.send(`La resta de ${n1} - ${n2} es ${parseInt(n1) - parseInt(n2)}`);
}

module.exports = {
    addition,
    multiply,
    divide,
    pow,
    substraction
};
