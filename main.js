
let box = document.getElementsByClassName("box");
let reset = document.getElementsByClassName("reset");
let size = 16;
let conatiner = document.getElementsByClassName("container");
let canvasP = 0;

canvas();

reset[0].addEventListener('click', () => {

    let result = 0;

    while (box.length != 0){
        a = 0;
        box[a].remove()
        a++;
    }

    result = prompt("Enter new canvas size (0-100):")
    if (result > 0 && result <= 100){
        size = result;
        canvas();
    } else {
        alert("Number must be between 1-100.");
        size = 16;
        canvas();
    }

}, false);

function canvas(){
    conatiner[0].style.display = "grid";
    conatiner[0].style.gridTemplateColumns = `repeat(${size}, auto)`;
    conatiner[0].style.gridTemplateRows = `repeat(${size}, auto)`;
    canvasP = size * size;
    for (i=0;i<canvasP;i++){
        const div = document.createElement('div');
        div.className = "box";
        document.getElementById("cont").appendChild(div);
        box[i].addEventListener("mouseenter", function(e){
            e.target.style.backgroundColor = "black";
        }, false);
    }
}
