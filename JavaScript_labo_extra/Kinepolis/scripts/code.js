const setup = () => {
    document.getElementById("btnFindSeat").addEventListener("click",findSeats);

    let seats = document.querySelectorAll("img");
    for (let i = 0; i <=35;i++){
        seats[i].addEventListener("click", seatSelecteren);
        console.log(seats[i]);
    }
}

const findSeats = ()=> {
    if(isVrij()){

    }
}

const isVrij = (event) => {
    if(event.target.getAttribute("src")=== "Images/seat_avail.png"){
        return true;
    }
    else{
        return false;
    }
}

const seatSelecteren = (event) =>{
    if (event.target.getAttribute("src")=== "Images/seat_select.png"){
        event.target.setAttribute("src", "Images/seat_avail.png");
    }
    else{
        event.target.setAttribute("src", "Images/seat_select.png");
    }

}

window.addEventListener("load", setup);