function getGlobantData() {

    var headers = {}
    fetch("https://PW2021-APINode-Franko94.franko94.repl.co/globant", {
        mode: 'cors',
        credentials: 'include',
        method: 'GET',
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("cargoGlobant").innerHTML = data['puesto'];
    })
    .catch(data => console.log(data));
}

function getPortoData() {

    var headers = {}
    fetch("https://PW2021-APINode-Franko94.franko94.repl.co/porto", {
        mode: 'cors',
        credentials: 'include',
        method: 'GET',
        headers: headers
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(data => console.log(data));
}

function saveUserinCookie(){
    var headers = {}
        const data = {nombreContacto: "asd"};
      fetch("https://PW2021-APINode-Franko94.franko94.repl.co/enviar-formulario", {
          mode: 'cors',
          credentials: 'include',
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data)
      })
      .then(data => console.log(data))
      .catch(data => console.log(data));

     
  }