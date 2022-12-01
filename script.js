


document.getElementById("rollbtn").addEventListener("click",gameStart);

function gameStart(){
    let number = document.getElementById("number").value;
    const DICEROLL = Math.floor((Math.random() * number) + 1);
    let imageTag = document.getElementById("diceImage");
    imageTag.src = "dice.img/dice"+DICEROLL+".png"
}

export function getNumber(){
    // return Math.floor((Math.random() * number) + 1);
    return 1;
}