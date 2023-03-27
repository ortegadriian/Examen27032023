// Inputs:
const inputTime1 = document.querySelector("#inputTime1");
const inputTime2 = document.querySelector("#inputTime2");

// Resultats:
const resultatTime = document.querySelector("#resultatTime");
const resultatArray = document.querySelector("#resultatArray");
const principal = document.querySelector("#principal");
const resultatJSON = document.querySelector("#resultatJSON");

// Botons:
const btnCalculaHora = document.querySelector("#calculaHora");
const btnNetejaEx1 = document.querySelector("#netejaEx1");
const btnGeneraArray = document.querySelector("#generaArray");
const btnNetejaEx2 = document.querySelector("#netejaEx2");
const btnCanviaEstil = document.querySelector("#canviaEstil");
const btnNetejaEstil = document.querySelector("#netejaEstil");
const btnCarregaJSON = document.querySelector("#carregaJSON");
const btnNetejaLlista = document.querySelector("#netejaLlista");

//Events:
btnCalculaHora.onclick = calculaHora;
btnNetejaEx1.onclick = netejaEx1;
btnGeneraArray.onclick = generaRandomArray;
btnNetejaEx2.onclick = netejaEx2;
btnCanviaEstil.onclick = canviaEstil;
btnNetejaEstil.onclick = netejaEstil;
btnCarregaJSON.onclick = carregaJSON;
btnNetejaLlista.onclick = netejaLlista;

//
const main = document.getElementById("principal");



//Exercici 1: suma d'hores
function calculaHora() {

    if (inputTime1.value && inputTime2.value) {
        const separarHoras1 = inputTime1.value.split(':')
        const separarHoras2 = inputTime2.value.split(':')

        let hora1 = parseInt(separarHoras1[0])
        let hora2 = parseInt(separarHoras2[0])

        let minutos1 = parseInt(separarHoras1[1])
        let minutos2 = parseInt(separarHoras2[1])

            let horas = hora1 + hora2;
            let minutos = minutos1 + minutos2;

            if (minutos >= 60) {
                minutos = minutos - 60;
                horas++
            }

            if (horas < 10) {
                horas = '0' + horas;
            }

            if (minutos < 10) {
                minutos = '0' + minutos;
            }

            resultatTime.innerHTML = horas + ':' + minutos;
    } else alert("Rellena los campos del ejercicio incompletos")
}



function netejaEx1() {
    inputTime1.value = "00:00";
    inputTime2.value = "00:00";
    resultatTime.innerHTML = "";


}

// Exercici 2: Arrays
function generaRandomArray() {
    let miarray = Array.from({ length: 10 }, () => Math.floor(Math.random() * (100)));
    let max = 0;
    miarray.forEach(function (item, index, arr) {
        if (item > max) {
            max = item;
        }
        console.log(miarray);
        resultatArray.innerHTML = miarray + " | El numero mas grande es: " + max;
    });

}

function netejaEx2() {
    miarray = [];
    resultatArray.innerHTML = "";
    console.log(miarray);
}

// Exercici 3: Estils CSS
function canviaEstil() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    main.style.borderColor = bgColor;

    var x1 = Math.floor(Math.random() * 256 - 1);
    var y2 = Math.floor(Math.random() * 256 - 1);
    var z3 = Math.floor(Math.random() * 256 - 1);
    var bgColor2 = "rgb(" + x1 + "," + y2 + "," + z3 + ")";
    main.style.backgroundColor = bgColor2;

    if (x <= 30 && y <= 30 && z <= 30) {
        main.style.color = 'white';
    }
}

function netejaEstil() {
    main.style.backgroundColor = 'white';
    main.style.borderColor = 'black';
    main.style.color = 'black';
}

// Exercici 4: JSON
function carregaJSON() {
    fetch("./peliculas.json")
        .then(response => {
            if (response.ok) return response.json();
            else {
                alert("No s'ha pogut completar la càrrega. Error " + response.status)
            }
        })
        .then(data => {
            pintaDadesJSON(data);
        });
}

function pintaDadesJSON(data) {

}

function netejaLlista() {

}