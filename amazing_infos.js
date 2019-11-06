var count4 = 0;

function amazing_info_one(){
    var amazing_info1_read_more = document.getElementById("read_more_overlay");
    if(count4%2==0){
        amazing_info1_read_more.style.left = "30%";
    }
    else{
        amazing_info1_read_more.style.left = "100%";
    }
    count4++;
}