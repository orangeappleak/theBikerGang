var count = 0;
function openNav(){
    var animate_menu2 = document.getElementById("animate_menu2");
    var bar1 = document.getElementById("bar1");
    var bar2 = document.getElementById("bar2");
    var bar3 = document.getElementById("bar3");
    if(count%2 == 0){
        document.getElementById("animate_menu1").style.clipPath = "circle(90%)";
        document.getElementById("animate_menu2").style.transform = "translateX(-2.2px)";
        bar1.style.background = "black";
        bar2.style.background = "black";
        bar3.style.background = "black";
        bar1.style.transform = "rotate(135deg) translateY(-7px) translateX(7px)";
        bar2.style.transform = "translateX(200px)";
        bar3.style.transform = "rotate(-135deg) translateY(7px) translateX(7px)";
        document.getElementById("hashtag").style.color = "black";
        menu_links = document.getElementsByClassName("menu_links");
    }
    
    else if(count%2!=0){
        var animate_menu = document.getElementById("animate_menu1");
        animate_menu.style.clipPath = "circle(0% at 1839px 108px)";
        document.getElementById("animate_menu2").style.transform = "translateX(0px)";
        bar1.style.background = "white";
        bar2.style.background = "white";
        bar3.style.background = "white";
        bar1.style.transform = "rotate(-180deg)";
        bar2.style.transform = "translateX(0px)";
        bar3.style.transform = "rotate(180deg)";
        document.getElementById("hashtag").style.color = "white";
        document.getElementById("menu_links").style.animation = "none";
        animate_menu2.style.pointerEvents = "auto";
    }
    count++;   
}
