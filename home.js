var count = 0;

function open_menu(){
    var menu = document.getElementById("menu");
    var bars_animate = document.getElementById("bars_animate");
    var bar1 = document.getElementById("bar1");
    var bar2 = document.getElementById("bar2");
    var bar3 = document.getElementById("bar3");
    if(count%2==0){
        menu.style.left = "70%";
        menu.style.backgroundColor = "white";
        bar1.style.backgroundColor = "black";
        bar2.style.backgroundColor = "black";
        bar3.style.backgroundColor = "black";
        bar1.style.transform = "rotate(45deg) translateY(10px) translateX(10px)";
        bar2.style.transform = "translateX(1000px)";
        bar3.style.transform = "rotate(-45deg) translateY(-7px) translateX(7px)";
    }
    else{
        menu.style.left = "100%";
        menu.style.backgroundColor = "black";
        bar1.style.backgroundColor = "white";
        bar2.style.backgroundColor = "white";
        bar3.style.backgroundColor = "white";
        bar1.style.transform = "rotate(360deg)";
        bar2.style.transform = "translateX(0px)";
        bar3.style.transform = "rotate(-360deg) translateY(0px) translateX(0px)";

    }
    count++;
}

function buy_now(){
    alert("button clicked");
}