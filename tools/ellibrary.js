// Elliott's JS Library!

//Query Selector
function qs(selector){
    let querySelector = document.querySelector(selector);
    return querySelector;
 }

//Query Selector All
function qsa(selector){
    let querySelectorAll = document.querySelectorAll(selector);
    return querySelectorAll;
}
 
//Add Event Listener
function AEL(element, event, Function){
    if(typeof element === 'string' || element instanceof String){
        qs(element).addEventListener(event, (e) => {
            Function();
        });
    }
    else{
        element.addEventListener(event, (e) => {
            Function();
        });
    }
}

//Create New Element
function NewElement(type, classes, parent){
    let newElement = document.createElement(type);
    for(i = 0; i < classes.length; i++){
        newElement.classList.add(classes[i]);
    }
    if(typeof parent === 'string' || parent instanceof String) qs(parent).appendChild(newElement);
    else parent.appendChild(newElement);
}

//Write to Console
function log(x){
    console.log(x);
}

function GetRekt(noob){
    let rekt = noob.getBoundingClientRect;
    let getRekt = {
        top: getRekt.left(),
        left: getRekt.left(),
        width: getRekt.width(),
        height: getRekt.height()
    }
    return getRekt;
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
  }
  