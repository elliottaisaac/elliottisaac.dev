// Elliott's JS Library!

//Write to Console
function log(x){
    console.log(x);
}

//Query Selector
function qs(selector){
    return document.querySelector(selector);
 }

//Query Selector All
function qsa(selector){
    return document.querySelectorAll(selector);
}

//Query Selector All - return array instead of node list
function qsarray(selector){
    return Array.from(document.querySelectorAll(selector));
}
 
//Add Event Listener - element parameter can be selector string or node object
function ael(element, event, Function){
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

//Insert element after existing element
function InsertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

//Create New Element
//- classes param accepts array containing class names, if no classes use false. 
//- use false for referenceElement param to return element as node object
//- use a node object for referenceElement param to add new element to document after reference element
function NewElement(type, classes, referenceElement){
    let newElement = document.createElement(type);
    if(classes){
        for(let i = 0; i < classes.length; i++){
            newElement.classList.add(classes[i]);
        }
    }
    if(referenceElement) InsertAfter(newElement, referenceElement);
    else return newElement;
}

//Get size and position of element
function MeasureElement(element){
    let rect = element.getBoundingClientRect();
    let dimensions = {
        top: rect.top,
        left: rect.left,
        bottom: rect.bottom,
        right: rect.right,
        width: rect.width,
        height: rect.height
    }
    return dimensions;
}

//Get width and height of viewport
function MeasureViewport(){
    let viewportDimensions = {
        width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    }
    return viewportDimensions;
}

//Get RBG color values from hex code
function ConvertHexToRGB(hex) {
    let c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const red = parseInt(c[1], 16);
    const green = parseInt(c[2], 16);
    const blue = parseInt(c[3], 16);
    return {
        r: red,
        g: green,
        b: blue,
        rbg: `rgb(${red}, ${green}, ${blue})`
    };
}
    

