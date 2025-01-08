let countEl=document.getElementById("count-el");
let saveEl=document.getElementById("save-el")
let count=0;


function increment(){
    count=count+1;
    countEl.innerText=count;
}

function decrement(){
    count=count-1;
    countEl.innerText=count;
}

function save(){
    let cs=count+"-";
    saveEl.textContent+=cs;
    count=0;
    countEl.innerText=count;
}

function reset(){
    saveEl.innerText="Previous values:";
    count=0;
    countEl.innerText=count;
}