const web = require('./data.js')
const http = require('node:http')
const server = http.createServer((req, res) => {
    res.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body>')
    res.write(`<h1>${web.title}</h1>`)
    res.write(`<section><h2>${web.subtitle1}</h2>`)
    res.write(`<p>${web.contenido1}</p>`)
    res.write(`<img src="${web.imagen.src}" width="${web.imagen.width}"></section>`)
    res.write(`<section><h2>${web.subtitle2}</h2>`)
    res.write(`<p>${web.contenido2}</p>`)
    res.write(`<table><thead><th>Título</th><th>Autor</th></thead><tr><td>${Object.keys(web.constenidoTabla)[0]}</td>
        <td>${web.constenidoTabla.libro1}</td>
    </tr>
    <tr>
        <td>${Object.keys(web.constenidoTabla)[1]}</td>
        <td>${web.constenidoTabla.libro2}</td>
    </tr>
    <tr>
        <td>${Object.keys(web.constenidoTabla)[2]}</td>
        <td>${web.constenidoTabla.libro2}</td>
    </tr>
</table></section>`)
    res.write(`<section><h2>${web.subtitle3}</h2>`)
    res.write(`<p>${web.contenido3}</p>`)
    res.write('<h3>Lista de la compra</h3>')
    res.write(`<ul>
        <li>${web.contenidoLista[0]}</li>
        <li>${web.contenidoLista[1]}</li>
        <li>${web.contenidoLista[2]}</li>
    </ul></section>`)
    res.end('</body></html>')
})
server.listen(0, () => {
    console.log(`http://localhost:${server.address().port}`)
})