//EXERCISE 1 (Event Listeners & forEach functions)

var items = ["Apple", "Orange", "Blueberries", "Banana"];

var button1 = document.getElementById("fruit");

button1.addEventListener("click", firstClick);
//in this syntax, do NOT use the parentheses with the called-function name!

function firstClick(){
    var body = document.getElementById("fruitlist");
    body.innerHTML = "";
    
    items.forEach(function(value, index){
        var element = document.createElement("li");
        element.innerHTML = value;
        body.appendChild(element);
    });
}

setTimeout(timeGreet, 15000);

function timeGreet(){
    alert("Hello World");
}