// Elliott's JS Library!

function qs(selector){
    let querySelector = document.querySelector(selector);
    return querySelector;
 }

function qsA(selector){
    let querySelectorAll = document.querySelectorAll(selector);
    return querySelectorAll;
}
 
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

function NewElement(type, classes, parent){
    let newElement = document.createElement(type);
    for(i = 0; i < classes.length; i++){
        newElement.classList.add(classes[i]);
    }
    if(typeof parent === 'string' || parent instanceof String) qs(parent).appendChild(newElement);
    else parent.appendChild(newElement);
}

function log(x){
    console.log(x);
}

function style(element, styles){
    if(typeof element === 'string' || element instanceof String) qs(selector).style = `${styles}`;
    else element.style = `${styles}`;
}

function AddClass(element, Class){
    if(typeof element === 'string' || element instanceof String) qs(element).classList.add(`.${Class}`);
    else element.classList.add(`.${Class}`);
}

function RemoveClass(element, Class){
    if(typeof element === 'string' || element instanceof String) qs(element).classList.remove(`.${Class}`);
    else element.classList.remove(`.${Class}`);
}

function SetAttribute(element, attribute, value){
    if(typeof element === 'string' || element instanceof String) qs(element).setAttribute(`${attribute}`, value);
    else element.setAttribute(`${attribute}`, value);
}