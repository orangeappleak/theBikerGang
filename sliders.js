var count2=0;

function slider1(){
    firstBg = document.getElementById("firstBg");
    secondBg = document.getElementById("secondBg");
    content = document.getElementById("content");
    heading = document.getElementById("partOne");
    info = document.getElementById("info");
    Slider1 = document.getElementById("slider1");
    Slider1.style.pointerEvents = "none";
    Slider2 = document.getElementById("slider2");
    Slider2.style.pointerEvents = "auto";
    firstBg.style.transform = "translateX(0px)";
    secondBg.style.transform = "translateX(1600px)";
    content.style.transform = "translateX(-1400px)";
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
    secondBg.style.transform = "translateX(400px)";
    content.style.transform = "translateX(-1400px)";
    setTimeout(function(){
        content.style.transform = "translateX(0px)";
        heading.innerHTML = "DESIGN";
        info.innerHTML = "The perfect design that suits your day to day needs";
        
    },1000);
    document.getElementById("slider2").style.pointerEvents = "none";
    document.getElementById("slider1").style.pointerEvents = "auto";
    document.getElementById("slider3").style.pointerEvents = "auto";
}

function slider3(){
    alert();
    firstBg = document.getElementById("firstBg");
    secondBg = document.getElementById("secondBg");
    thirdBg = document.getElementById("thirdBg");
    content = document.getElementById("content");
    heading = document.getElementById("partOne");
    info = document.getElementById("info");
    if(firstBg.style.transform == "translateX()"){
        alert("if");
        firstBg.style.transform = "translateX(1500px)";
        thirdBg.style.transform = "translateX(400px)";
        content.style.transform = "translateX(-1400px)";
        
        setTimeout(function(){
            content.style.transform = "translateX(0px)";
            heading.innerHTML = "Service";
            info.innerHTML = "Have a problem , we always have a solution.No matter what the problem is we have service centers near you for your assitance.";
        },1000);
        document.getElementById("slider1").pointerEvents = "auto";
    }
    else{
        alert("else");
        content.style.transform = "translateX(-1400px)";
        secondBg.style.transform = "translateX(1600px)";
        thirdBg.style.transform = "translateX(400px)";
        setTimeout(function(){
            content.style.transform = "translateX(0px)";
            heading.innerHTML = "Service";
            info.innerHTML = "Have a problem , we always have a solution.No matter what the problem is we have service centers near you for your assitance.";
        },1000);
        document.getElementById("slider2").pointerEvents = "auto";
        document.getElementById("slider1").pointerEvents = "auto";
    }
    document.getElementById("slider3").pointerEvents = "none";
}