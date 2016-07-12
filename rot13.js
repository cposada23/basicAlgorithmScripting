function rot13(str) { // LBH QVQ VG!
    var alfa = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var palabras = str.split(' ');
    var resultado = '';
    for (p in palabras){
        var palabra = palabras[p];
        var letras = palabra.split('');
        for (l in letras){
            var letra = letras[l];
            var x = alfa.indexOf(letra);
            if(x>=0){
                x = (x+13)% alfa.length;
                resultado += alfa[x];
            }else{
                resultado += letra;
            }
        }
        if(p<palabras.length-1){
            resultado +=" ";
        }
    }
    return resultado;
}

// Change the inputs below to test
console.log(rot13("AGUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));