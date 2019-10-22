var count2=0;

function slider1(){
    firstBg = document.getElementById("firstBg");
    secondBg = document.getElementById("secondBg");
    content = document.getElementById("content");
    heading = document.getElementById("partOne");
    info = document.getElementById("info");
    Slider1 = document.getElementById("slider1");
    Slider2 = document.getElementById("slider2");
    firstBg.style.transform = "translateX(0px)";
    secondBg.style.transform = "translateX(1500px)";
    content.style.transform = "translateX(-1600px)";
    setTimeout(function(){
        content.style.transform = "translateX(0px)";
        heading.innerHTML = "WHAT WE PROVIDE";
        info.innerHTML = "We provide some of the best hand made Bicycles that you can enjoy your ride on. Wonder how we make them ? check out how our BIKES are made.";
    },1000);
}

function slider2(){
    firstBg = document.getElementById("firstBg");
    secondBg = document.getElementById("secondBg");
    content = document.getElementById("content");
    heading = document.getElementById("partOne");
    info = document.getElementById("info");
    firstBg.style.transform = "translateX(1500px)";
    secondBg.style.transform = "translateX(-980px)";
    setTimeout(function(){
        content.style.transform = "translateX(0px)";
        heading.innerHTML = "DESIGN";
        info.innerHTML = "The perfect design that suits your day to day needs";
        
    },1000)
    content.style.transform = "translateX(-1600px)";
}