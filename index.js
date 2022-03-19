function guess(){

    var x=document.getElementById("gen").value;
    if(x>=100)
    alert("Please enter number in range 1-100 ")
    var ran=Math.floor(Math.random()*100+1)
    if(x==ran){
        document.getElementById("r").innerHTML="Congrats well played ";
    }
    else if (x>=ran && x<=ran){
        document.getElementById("r").innerHTML="Better luck next time ";
    }
    else{
        document.getElementById("r").innerHTML=" ";
    }
}
function clean(){
    document.getElementById("r").innerHTML=" ";
}