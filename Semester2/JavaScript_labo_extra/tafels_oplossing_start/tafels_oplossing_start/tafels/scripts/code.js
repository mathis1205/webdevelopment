let tafels=[];

const setup = () => {
    document.getElementById("btnGo").addEventListener("click", addTafel)
    createHeader();
}

const addTafel = () => {
    let txtStartGetal = document.getElementById("txtStart");
    let startGetal = parseInt(txtStartGetal.value);
    if(isNaN(startGetal)){
        alert("Ingevoerde value is geen getal");
    }
    else{
        isGetal(startGetal);
    }
}

const isGetal = (startGetal) => {
    let getal = startGetal;
    if(getal<10){
        alert ("getal ok");
        createTafel(getal);
    } else {
        alert ("getal te groot")
    }
    return value;
}

const createTafel = (tafel) => {
    tafelDiv.appendChild(createHeader(tafel))
    tafelDiv.setAttribute("class", "tafel");

    for(var i = 1; i<=10; i++){
        let row = document.createElement("div");
        if(i%2 === 0){
            row.setAttribute("class", "even")
        }
        row.appendChild(document.createTextNode(tafel.start + " x " + i + " = "+ tafel.start*i));
        tafelDiv.appendChild(row);
    }
    tafelsDiv.append(tafelDiv);
}

const createHeader = (tafel) => {
    // maak een nieuwe div voor de header
    let headerDiv = document.createElement("div");
    // voeg een class toe aan de header div
    headerDiv.setAttribute("class", "header");

    let headerNode = document.createTextNode("Tafel van "
        + tafel.start + " aangemaakt op: "
        + tafel.datum.toTimeString().substring(0,8));
    // voeg de textnode toe aan de header div met de inhoud van de header
    headerDiv.appendChild(headerNode);
    return headerDiv;
};

const verwijderAlleChildren = (element) =>{
    while (element.firstChild){
        element.removeChild(element.firstChild);
    }
};

window.addEventListener("load", setup);