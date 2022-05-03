
let box = document.getElementsByClassName("box");

for (i=0;i<16*16;i++){
    const div = document.createElement('div');
    div.className = "box";
    document.getElementById("cont").appendChild(div);
    box[i].addEventListener("mouseenter", function(e){
        e.target.style.backgroundColor = "black";
    }, false);
}