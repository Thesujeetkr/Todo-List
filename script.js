const inputBox = document.getElementById("input-box");
const listContainer =document.getElementById("list-container");

function AddTask(){
    if(inputBox.value ===""){
        alert("You must write something");
    }
    else{
        // add li variable inside ul element.
        let li =document.createElement("li");
        // entered value stored inside li variable
        li.innerHTML = inputBox.value; 
        // now value of li variable will store and show inside ul element.
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span)
    }

    // after write in input box it will clear automatic by clicking.
    inputBox.value ="";
    saveData();
}


listContainer.addEventListener("click", function(s){

    if(s.target.tagName==="LI"){
        s.target.classList.toggle('checked');
        saveData();
    }
    else if(s.target.tagName === "SPAN"){
        s.target.parentElement.remove();
        saveData();
    }

});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();