let inputBox = document.querySelector("#input-box");
let addBtn = document.querySelector("#add-btn");
let listContainer = document.querySelector("#list-container");



addBtn.addEventListener("click",function(){

    if(inputBox.value === ''){
        alert("Please enter the task ");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let crossbtn = document.createElement("button");
        crossbtn.innerHTML = "✖";
        li.appendChild(crossbtn);
       
        
        
    }
    inputBox.value = "";
    saveData();
})
    

listContainer.addEventListener("click",function(e){
    if(e.target.nodeName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.nodeName === "BUTTON"){
       e.target.parentElement.remove();
       saveData();
    }
       
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function  showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();









