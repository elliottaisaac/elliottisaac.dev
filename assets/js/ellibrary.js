// Elliott's JS Library!

function qs(selector){
    let querySelector = document.querySelector(selector);
    return querySelector;
 }

function qsA(selector){
    let querySelectorAll = document.querySelectorAll(selector);
    return querySelectorAll;
}

function qsaC(Class){
   let querySelectorAllFromClass = (`.${Class}`);
   return querySelectorAllFromClass;
}

function qsE(element){
    let querySelectorElement = document.querySelector(`#${element}`);
    return querySelectorElement;
 }
 
function qsID(id){
   let querySelectorID = document.querySelector(`#${id.id}`);
   return querySelectorID;
}

function AEL(selector, event, Function){
    qs(selector).addEventListener(event, (e) => {
        Function();
    });
}

function NewElement(element, classes, parent){
    let newElement = document.createElement(element);
    for(i = 0; i < classes.length; i++){
        newElement.classList.add(classes[i]);
    }
    qs(parent).appendChild(newElement);
}

function log(x){
    console.log(x);
}

function style(selector, styles){
    qs(selector).style = `${styles}`;
}

function AddClass(selector, Class){
    qs(selector).classList.add(`.${Class}`);
}

function RemoveClass(selector, Class){
    qs(selector).classList.remove(`.${Class}`);
}

function SetAttribute(selector, attribute, value){
    qs(selector).setAttribute(`${attribute}`, value);
}

