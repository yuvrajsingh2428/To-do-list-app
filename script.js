const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li"); /* Storing the text in li*/
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);         /* li conent will be displayed inside the listcontainer*/
        /* now addind the cross icon to delete the written text(span)*/
        let span=document.createElement("span");
        span.innerHTML = "\u00d7";
        /* now we have to display the span*/
        li.appendChild(span);

    }
    /* now clearing the text which has been left in the (add your text) after adding the text*/
    inputBox.value ="";
    saveDate();  /* saveData will be called & it will save the updated content in the browser */

}
/* clcik function for the deleting the text from cross icon which has been added*/

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveDate();   /* for updation of data it is checked or completed */
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDate(); /* for updation of data to remove it if done */
    }
}, false);

/* storing the data so that it can not vanish after refreshing the browser*/

function saveDate(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
/* Displaying the data whenever we are opening the browser */

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();
