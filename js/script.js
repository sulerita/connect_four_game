function selCol(w){
    console.log(w);
    i = document.getElementsByClassName(w);
    // console.log(i);
    for(var x=0; x < i.length; x++){
        // console.log(i[x]);
        i[x].style.opacity=1;
    }
}
function leaveCol(w){
    console.log(w);
    i = document.getElementsByClassName(w);
    // console.log(i);
    for(var x=0; x < i.length; x++){
        // console.log(i[x]);
        i[x].style.opacity=0.6;
    }
}