const meses = ["Enero", "febrero", "Marzo", "Abril", "mayo", "junio", "julio", "Agosto", "septiembre", "Octubre", "Noviembre", "Diciembre"]
document.write("<h1>Lista de Meses</h1>")
document.write("<ul>")
for(let i = 0; i < meses.length; i++){
     document.write(`<li>${meses[i]}</li>`)
}
document.write("</ul>")