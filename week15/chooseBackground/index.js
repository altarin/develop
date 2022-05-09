function show(){
    if (document.getElementById("background").value=="white"){
        document.body.style.background = 'white';   
        document.getElementById("title").style.color = 'black'; 
    }
    else if (document.getElementById("background").value=="dark"){
        document.body.style.background = 'black';  
        document.getElementById("title").style.color = 'white'; 
    }
    else if (document.getElementById("background").value=="green"){
        document.body.style.background = 'green'; 
        document.getElementById("title").style.color = 'black'; 
    }
    else if (document.getElementById("background").value=="orange"){
        document.body.style.background = 'orange';  
        document.getElementById("title").style.color = 'black'; 
    }
    else if (document.getElementById("background").value=="blue"){
        document.body.style.background = 'blue';  
        document.getElementById("title").style.color = 'white'; 
    }
}