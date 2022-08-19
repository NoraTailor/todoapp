/*const textInput = document.getElementById('task-text').value;
const btn = document.getElementById('add-task');
const newTask = document.getElementById('task-container');

btn.addEventListener('click', function(){
    let tasks = newTask.innerHTML
    tasks += `
<ul>
<li><input type="checkbox">${textInput}</li>
</ul>
`


})*/
// Create a "close" button and append it to each list item
var nodeList = document.getElementsByTagName("li");
var i;
for (i = 0; i < nodeList.length; i++){
    var span = document.createElement('span');
    var text = document.createTextNode('\uD83D\uDDD1');
    span.className = "close";
    span.appendChild(text);
    nodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName('close');
for (var i = 0; i < close.length; i++){
    close[i].onclick = function (){
        var div = this.parentElement;
        div.style.display = "none";
        
    }
}


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement (){
    var li = document.createElement('li');
    var inputValue = document.getElementById('task-text').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if(inputValue === ''){
        alert('I know you have to do something today.');

    } else {
        document.getElementById('ulPart').appendChild(li);
    }
    document.getElementById('task-text').value = "";
  

    var span = document.createElement('SPAN');
    var text = document.createTextNode('\uD83D\uDDD1');
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

  for (i = 0 ; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'none';
       
    }
   
  }
  
 
}


/*
const deleteTimer = setTimeout(deleteTasks(),  5000)
const d = new Date();
const midnight = d.getminutes(0, 0, 0, 0);
const content = document.getElementsByTagName('ul');

function deleteTasks () {
    if(true){
        var div = this.parentElement;
        div.style.display = 'none';
        deleteTimer;
    }
}

deleteTasks();*/
/*

function deleteContent () {
    const content = document.getElementsByTagName('LI').value;
    setTimeout( function () {content = '';}, 3000)
}





function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }



  
function checkCookie() {
    let user = getCookie("inputValue");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }*/