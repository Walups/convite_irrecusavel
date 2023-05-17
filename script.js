function change(i, j){

    

    buttonNo.style.position = "absolute";
    buttonNo.style.left = i + "px";
    buttonNo.style.top = j + "px";
    

}

let buttonNo = document.querySelector("#no");

buttonNo.addEventListener("click", function(){ 
    
    change(Math.floor(Math.random()*500)+1, Math.floor(Math.random()*500)+1) ;

    
});



