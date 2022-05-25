import {somar, dobro, temperatura, tabuada, media, corPrimaria, ingressoCinema, FreqCaracter, maiorNumero} from './services.js'

import { Router } from "express";



const server = Router();

server.get('/dobro/:numero', (req, resp) => {
    try{
    const numero = Number(req.params.numero);
    const x = dobro(numero);
    
    resp.send({
        dobro: x
    })
    }catch(err){
        resp.send({
        err:err.message
        })
    }
})


server.get('/somar', (req, resp) => {
    try{
    const a = Number(req.query.a);
    const b = Number(req.query.b)

    const x = somar(a, b) 
    resp.send({
        soma: x
    })
    }catch(err){
        resp.send({
            err:err.message
        })
    }
}) 


server.post('/somar', (req, resp) => {
    try{
    const { valores: { a,b } } = req.body;

    const x = somar (a, b);

    resp.send({
        soma: x
    })
    }
    catch (err) {
        resp.send({
            err: err.message
        })
    }
})

server.get('/tabuada', (req, resp) => {
    try {
    const a = Number(req.query.n);

    const x = tabuada(a); 

    resp.send({
        tabuada: x
    })
    }
    catch (err) {
        resp.send({
            err:err.message
        })
    }
})

server.get('/temperatura', (req, resp) =>{
    try{
    const t = Number(req.query.t);

    const x = temperatura(t);
    resp.send({
        febre:x
    })
    }catch(err){
        resp.send({
            err:err.message
        })
    }
})

server.post('/media', (req,resp) =>{
    try{
    const {notas: {n1, n2, n3}} = req.body;

    const x = media(n1,n2,n3);
    resp.send({
        media: x
    })
    }catch(err){
        resp.send({
            err:err.message
        })
    }   
})

server.get('/dia2/corprimaria/:cor', (req, resp) =>{
    try{
        const a = (req.params.cor);

        const x = corPrimaria(a);
        resp.send({
            cor:x
        })
    }
    catch(err){
        resp.send({
            err:err.message
        })
    }
})

server.post('/dia2/ingressocinema', (req,resp) =>{
    try{
        const {inteira, meia, diaSemana, nacionalidade} = req.body;
        
        const x = ingressoCinema(inteira, meia, diaSemana, nacionalidade);
        resp.send({
            valor: x
        })
    }
    catch(err){
        resp.send({
            err:err.message
        })
    }
})

server.get('/dia2/freqcaracter/:texto/:caracter', (req, resp) => {
    try {
        const a = req.params.texto;
        const b = req.params.caracter;
        
        //const {a, b} = req.params; ERRADO

        const x = FreqCaracter(a, b);

        resp.send({
            Freq: x
        })
    }

    catch (err) {
        resp.send({
            err:err.message
        })
    }
})

server.post('/dia2/maiornumero', (req, resp) => {
    try{
    const a = req.body.array;

    const x = maiorNumero(a);

    resp.send({
        maior: x
    })
    } catch(err) {
        resp.send({
            err:err.message
        })
    }
})

export default server;