

document.getElementById("addBtn").onclick = function(){
    if(document.getElementById("textId").value === "" ){
        alert("You should enter at least 1 character")
    }
    else{
    console.log("hello")
    
    let div = document.getElementById('Tasks');
        
    let p = document.createElement("p"); 
    p.textContent = document.getElementById("textId").value;
    p.setAttribute("class","taskText");

    let checkBox = document.createElement("INPUT");
    checkBox.setAttribute("type", "checkbox"); 
    checkBox.setAttribute("class", "checkboxId");
    checkBox.addEventListener('input', function(){
    
        if(this.checked){
        p.style.color = "red";
        p.style.textDecoration = "line-through";
        }
        else{
            p.style.color = "black";
            p.style.textDecoration = "";
        }

    })
   
    document.getElementById("textId").value = ""
    p.appendChild(checkBox);
    div.appendChild(p);
}
}
document.getElementById("removeBtn").onclick = function(){
    let checkBoxes = document.getElementsByClassName("checkboxId");

    for(let i = 0; i< checkBoxes.length; i++){
        if(checkBoxes[i].checked){
            
            document.getElementsByClassName("taskText")[i].remove();
            i--;
        }
    }
}

