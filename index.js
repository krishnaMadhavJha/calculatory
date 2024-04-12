function output(event){
   
    let buttonId = event.target.id;
        
    
    document.getElementById("r").value+=buttonId;
}

function calculate(){
    const sum=eval(document.getElementById("r").value);
    document.getElementById("r").value=sum;
}
function erase(){
    document.getElementById("r").value=" "
}