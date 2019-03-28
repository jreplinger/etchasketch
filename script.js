window.onload=function(){
    //builds the grid
    var a = "";
    for(var i=0; i<256; i++){
        a += "<div class='grid' onmouseover='changeColor(this)'>&nbsp;</div>";
    }
    //puts inside gridcontainer
    document.getElementById("gridcontainer").innerHTML= a;
};

//changes color
function changeColor(gridblock){
    gridblock.style.backgroundColor="lightgreen";
}

//clear - INCOMPLETE
document.getElementById("clearbutton").addEventListener("click", function(){
    var namething = document.getElementsByClassName("grid");
    for(var i=0; i<namething.length; i++){
        namething[i].style.backgroundColor="whitesmoke";
    }
})

//change grid size - INCOMPLETE
document.getElementById("enterbutton").addEventListener("click", function(){
    var sw = document.getElementById("gridsize").value;
    console.log("detected enter button click"); // delete this later
    console.log(sw); // delete this later
    if(sw>0){
        var a = "";
        for(var i=0; i<sw^2; i++){
            a += "<div class='grid' onmouseover='changeColor(this)'>&nbsp;</div>";
            document.getElementsByClassName("grid")[i].style.height= 320/sw+"px";
            document.getElementsByClassName("grid")[i].style.width= 320/sw+"px";
        }
        //puts a inside gridcontainer
        document.getElementById("gridcontainer").innerHTML= a;
    }
})