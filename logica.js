/*

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

*/

const encriptar = () => {
    let texto = document.getElementById("inputTexto").value
    texto = texto.toLowerCase()

    let texCifrado = texto.replace(/e/igm, 'enter')
    texCifrado = texCifrado.replace(/o/igm, 'ober')
    texCifrado = texCifrado.replace(/i/igm, 'imes')
    texCifrado = texCifrado.replace(/a/igm, 'ai')
    texCifrado = texCifrado.replace(/u/igm, 'ufat')
    console.log(texCifrado)

    document.getElementById('muneco').style.display = "none";
    document.getElementById('texto').style.display = "none";
    document.getElementById('texto2').innerHTML = texCifrado
    document.getElementById('copy').style.display = "show";
    document.getElementById('copy').style.display = "inherit"
}
const desencriptar = () => {
    let texto = document.getElementById("inputTexto").value
    texto = texto.toLowerCase()

    let texCifrado = texto.replace(/enter/igm, 'e')
    texCifrado = texCifrado.replace(/ober/igm, 'o')
    texCifrado = texCifrado.replace(/imes/igm, 'i')
    texCifrado = texCifrado.replace(/ai/igm, 'a')
    texCifrado = texCifrado.replace(/ufat/igm, 'u')

    document.getElementById('muneco').style.display = "none";
    document.getElementById('texto').style.display = "none";
    document.getElementById('texto2').innerHTML = texCifrado
    document.getElementById('copy').style.display = "show";
    document.getElementById('copy').style.display = "inherit"
}

const copy = () => {
    let texto = document.getElementById('texto2')
    texto.select()
    document.execCommand('copy')
    alert("Se copio el texto")
}