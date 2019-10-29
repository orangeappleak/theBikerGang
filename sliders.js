var current_active_slider;
var next_active_slider;

function active_slider(){
    var slider_container = document.getElementById("sliders");
    var sliders = slider_container.getElementsByClassName("slider");
    for(var i=0;i<sliders.length;i++){
         if(sliders[i].className == "slider active"){
            current_active_slider=sliders[i].id;
        }
        sliders[i].addEventListener("click",function(){
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active","");
            this.className += " active";
        });
    }
    

}

function slider1(){
    next_active_slider = document.getElementById("slider1").id;
    if(current_active_slider == "slider2" && next_active_slider == "slider1"){
        secondBg = document.getElementById("secondBg");
        partOne = document.getElementById("partOne");
        info = document.getElementById("info");
        firstBg = document.getElementById("firstBg");
        firstBg.style.transform = "translateX(0vw)";
        secondBg.style.transform = "translateX(100vw)";
    }
    else if(current_active_slider == "slider3" && next_active_slider == "slider1"){
        thirdBg = document.getElementById("thirdBg");
        partOne = document.getElementById("partOne");
        info = document.getElementById("info");
        firstBg = document.getElementById("firstBg");
        firstBg.style.transform = "translateX(0vw)";
        thirdBg.style.transform = "translateX(100vw)";
    }
    setTimeout(function(){
            content.style.transform = "translateX(0px)"
            partOne.innerHTML = "WHAT WE PROVIDE";
            info.innerHTML = "We provide some of the best hand made Bicycles that you can enjoy your ride on.</br>                 Wonder how we make them ? check out how our BIKES are made.";
        },1000);
        content.style.transform = "translateX(-1300px)";
}
function slider2(){
    document.getElementById("slider2").click();
    next_active_slider = document.getElementById("slider2").id;
    current_active_slider.className = "slider active";
    if(current_active_slider == "slider1" && next_active_slider == "slider2"){
        secondBg = document.getElementById("secondBg");
        partOne = document.getElementById("partOne");
        info = document.getElementById("info");
        firstBg = document.getElementById("firstBg");
        firstBg.style.transform = "translateX(100vw)";
        secondBg.style.transform = "translateX(20vw)";
        
    }
    else if(current_active_slider == "slider3" && next_active_slider == "slider2"){
        secondBg = document.getElementById("secondBg");
        partOne = document.getElementById("partOne");
        info = document.getElementById("info");
        thirdBg = document.getElementById("thirdBg");
        thirdBg.style.transform = "translateX(100vw)";
        secondBg.style.transform = "translateX(20vw)";
    }
    setTimeout(function(){
            content.style.transform = "translateX(0px)"
            partOne.innerHTML = "DESIGN";
            info.innerHTML = "Design is not just what it looks like and feels like. Design is how it works.";
        },1000);
        content.style.transform = "translateX(-1300px)";
}
function slider3(){
    document.getElementById("slider3").click();
    next_active_slider = document.getElementById("slider3").id;
    if(current_active_slider == "slider1" && next_active_slider == "slider3"){
        firstBg = document.getElementById("firstBg");
        thirdBg = document.getElementById("thirdBg");
        partOne = document.getElementById("partOne");
        info = document.getElementById("info");
        firstBg.style.transform = "translateX(100vw)";
        thirdBg.style.transform = "translateX(10vw)";

    }
    else if(current_active_slider == "slider2" && next_active_slider == "slider3"){
        secondBg = document.getElementById("secondBg");
        partOne = document.getElementById("partOne");
        info = document.getElementById("info");
        thirdBg = document.getElementById("thirdBg");
        thirdBg.style.transform = "translateX(10vw)";
        secondBg.style.transform = "translateX(100vw)";
    }
            setTimeout(function(){
            content.style.transform = "translateX(0px)"
            partOne.innerHTML = "EXPERIENCE";
            info.innerHTML = "Experience the Wind and Speed by riding one of the finest bikes ever made.</br>          Explore the bike the most suites you and your personality.";
        },1000);
        content.style.transform = "translateX(-1300px)";
}