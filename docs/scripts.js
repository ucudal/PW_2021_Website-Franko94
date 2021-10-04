function Usuario(nombre, edad, pais, pokemon){
    this.nombre = nombre;
    this.edad = edad;
    this.pais = pais;
    this.pokemon = pokemon;
}

function nuevoUsuario(){
    var user = new Usuario(
        document.getElementById("nombreTxt").value,
        document.getElementById("edadTxt").value,
        document.getElementById("paisTxt").value,
        document.getElementById("pokemonTxt").value
    )
    return document.getElementById("labelUsr").innerHTML = "Nombre: "+user.nombre+ " Edad: "+user.edad+" Pais: "+user.pais+" Pokemon: "+user.pokemon;
}