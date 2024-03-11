// Elliott's JS Library!


// Write to Console
function log(x){
    console.log(x);
}


// Query Selector
function qs(selector){
    return document.querySelector(selector);
 }


// Query Selector All
function qsa(selector){
    return document.querySelectorAll(selector);
}


// Query Selector All - return array instead of node list
function qsarray(selector){
    return Array.from(document.querySelectorAll(selector));
}
 

// Add Event Listener - element parameter can be selector string or node object
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


// Adds and/or removes CSS classes
// Takes a node object/element and an array of strings as inputs
// Assigns element a the CSS class named in each value of the array...
// UNLESS the string starts with '!' in which case it removes the class whose name follows
function UpdateClasses(element, classNameArray){
    if(classNameArray){
        for(let i = 0; i < classNameArray.length; i++){
            if(classNameArray[i].charAt(0) != "!") element.classList.add(classNameArray[i]);
            else element.classList.remove(classNameArray[i].substring(1));
        }
    }
}


//Insert element after existing element
function InsertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}


// Create new DOM element
// Classes param accepts array containing class names, if no classes use false. 
// Use false for referenceElement param to return element as node object
// Use a node object for referenceElement param to add new element to document after reference element
function NewElement(type, classes, referenceElement){
    const newElement = document.createElement(type);
    UpdateClasses(newElement, classes);
    if(referenceElement) InsertAfter(newElement, referenceElement);
    return newElement;
}


// Get size and position of element
function GetDimensions(element){
    const rect = element.getBoundingClientRect();
    const dims = {
        top: rect.top,
        left: rect.left,
        bottom: rect.bottom,
        right: rect.right,
        width: rect.width,
        height: rect.height
    }
    return dims;
}


// Get width and height of viewport
function MeasureViewport(){
    const viewportDimensions = {
        width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    }
    return viewportDimensions;
}


// Returns object that checks viewport size against am array containing reponsiveness breakpoints for mobile, tablet, and desktop 
// input false in place of array to use default breakpoints (mobile: 768px, tablet: 992px, desktop: 1200px)
function CheckViewportResponsiveness(breakpoints){
    if(!breakpoints) breakpoints = [768, 992, 1200];
    let breakpointChecks = {
        isMobile: false,
        isTablet: false,
        isDesktop: false
    }
    const viewportWidth = MeasureViewport().width;
    if(viewportWidth < breakpoints[0]) breakpointChecks.isMobile = true;
    else if(viewportWidth < breakpoints[1]) breakpointChecks.isTablet = true;
    else  breakpointChecks.isDesktop = true;
    return breakpointChecks;
}
function CVR(){ return CheckViewportResponsiveness(false); } // shorthand for using defaults

//convert int to binary string
function toBinary(x){
    let binary = "";
    for(let i = 0; x/Math.pow(2,i) >= 1; i++){
        if(Math.floor((x/Math.pow(2,i))) % 2 == 0) binary += '0';
        else binary += '1';
    }
    return binary.split('').reverse().join('');
}
