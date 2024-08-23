//----------------------------------------------------------------------------------------->
// nav & scroll scripts ----------------------------------------------------------->
//----------------------------------------------------------------------------------------->
if(window.innerWidth > 1200){
    let lastScrollTop = 0;

    window.addEventListener("scroll", UpdateNav);
    window.addEventListener("resize", UpdateNav);

    function UpdateNav(){
    const st = document.querySelector("html").scrollTop; 
    const nav = document.querySelector("#top-nav");
            
            //scrolling up---------------------------------------------------->
            if (st - 12 > lastScrollTop || st < 250){
                nav.style.height = "46px";
                nav.style.margin = "25px auto 0 auto";  
                nav.style.paddingTop = "0px"; 
                nav.style.backgroundColor = "transparent";
                nav.style.position = "static";
                nav.classList.remove = "scrolling";
                nav.style.borderBottom = "1px solid transparent";
                document.querySelector("#Blogo").href = "/";
            } 
            //---------------------------------------------------------------->

            //scrolling down-------------------------------------------------->
            else if(st + 12 < lastScrollTop) {
                nav.style.backgroundColor = "hsla(34,24%,94%,0.625)";
                nav.style.position = "fixed";
                nav.style.marginTop = "0px";  
                nav.style.paddingTop = "25px"; 
                nav.style.zIndex = "10"; 
                nav.style.top = "0px";  
                nav.style.height = "96px";
                nav.style.borderBottom = "1px solid #cc3333";
                nav.style.maxWidth = "1240px";
                document.querySelector("#Blogo").href = "#doc";
            }
            //---------------------------------------------------------------->
            
            lastScrollTop = st <= 0 ? 0 : st;
    }
}
//----------------------------------------------------------------------------------------->
//----------------------------------------------------------------------------------------->
//----------------------------------------------------------------------------------------->



//----------------------------------------------------------------------------------------->
// homepage animated text typing ----------------------------------------------------------->
//----------------------------------------------------------------------------------------->
if(document.querySelector("#typing") && document.querySelector("#typing").scrollTop > -100){
    var copy, cycle, backspacing, Typing, TypedChars, backspaceTo, lag; 
    copy = ["development","Adobe CC (all the good ones)","JavaScript (like a boss)","HTML","React","Animation","UX","Web Accessibility","Graphic and Web Design","WordPress","pixel-perfect web experiences"];
    for(i=0; i<copy.length; i++) copy[i] = `I do ${copy[i]}.`;
    backspaceTo = 5;
    cycle = 0;
    backspacing = false;
    Typing = document.querySelector("#typing");
    Typing.innerHTML = copy[0];
       
    function Type(){
        lag = setInterval( () => {  
                if (Typing.innerHTML.length == copy[cycle].length) backspacing = true;
                else if(Typing.innerHTML.length == backspaceTo){
                        backspacing = false;
                        Randomize();
                        TypedChars = copy[cycle].split("");
                }

                if (backspacing == true && Typing.innerHTML.length > backspaceTo) Typing.innerHTML = Typing.innerHTML.slice(0, -1);  

                if(backspacing == false && Typing.innerHTML.length >= backspaceTo){ 
                    if (Typing.innerHTML.length < copy[cycle].length) Typing.innerHTML += TypedChars[Typing.innerHTML.length];
                    if (Typing.innerHTML.length == copy[cycle].length){
                        clearInterval(lag);
                        setTimeout( () => { Type(); }, 2000);
                    }  
                }
        }, 200);     
    }

    function Randomize(){ 
        let prev = cycle;
        cycle = Math.floor(Math.random() * copy.length);
        if(cycle == prev) Randomize();
    }

    window.addEventListener("load", () => {setTimeout( () => { Type(); }, 1000);});

    //blinks the cursor----------------------------------------------->
    const cursor = document.querySelector("#cursor");
    cursor.classList.add("hidden");
    let blinking;
    setInterval( () => {
        if (blinking == true){
        cursor.classList.remove("hidden"); 
        blinking = false;
        }
        else {
            cursor.classList.add("hidden");
            blinking = true;
        }
    }, 680);
    //---------------------------------------------------------------->
}
//----------------------------------------------------------------------------------------->
//----------------------------------------------------------------------------------------->
//----------------------------------------------------------------------------------------->



//----------------------------------------------------------------------------------------->
// dot field -------------------------------------------------------------------------------->
//----------------------------------------------------------------------------------------->
if(window.innerWidth > 820 && document.querySelector("html").scrollTop < 328){
    const cols =  Math.floor(document.documentElement.clientWidth / 16);
    const rows =  Math.floor(208 / 16);
    const numOfDots = cols * rows;
    const dotField = document.querySelector("#dot-field");
    let dotArray = [];

    for(i = 0; i < numOfDots; i++){
        const d = document.createElement("div");
        d.classList.add("dot");
        dotField.appendChild(d);
        dotArray.push(d);
    }

    window.addEventListener("mousemove", (e) => UpdateDotField(e) );
    dotField.addEventListener("click", (e) => UpdateDotField(e) );
    dotField.click();

    function UpdateDotField(e){
        for(i = 0; i < dotArray.length; i++){
                const distance = GetDistance(e.clientX, e.clientY, dotArray[i].getBoundingClientRect().left, dotArray[i].getBoundingClientRect().top);
                const opacity = (1 / (distance / 10)).toFixed(2);
                dotArray[i].style.opacity = opacity; 
        }        
    }

    function GetDistance(x1, y1, x2, y2){
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

}
//----------------------------------------------------------------------------------------->
//----------------------------------------------------------------------------------------->
//----------------------------------------------------------------------------------------->


//----------------------------------------------------------------------------------------->
// floating blob -------------------------------------------------------------------------------->
//----------------------------------------------------------------------------------------->
function Blob(blobElement, size, top, left){
    const blob = blobElement;
    let br = 50;
    let sh = size;
    let sw = size;
    let tp = top;
    let lf = left;
    let rd,t,l,sr,c;
    let blobInt = setInterval( () => {
        rd = Math.random();
        t = Math.random();
        l = Math.random();
        shr = Math.random();
        swr = Math.random();
        c = Math.floor(Math.random()*4);
        if(rd > 0.5) br+= 1;
        else br-= 1;
        if(shr > 0.5) sh+= 1;
        else sh-= 1;
        if(swr > 0.5) sw+= 1;
        else sw-= 1;
        c = Math.floor(Math.random()*4);
        if(t > 0.5) tp+= 0.5;
        else tp-= 0.5;
        if(l > 0.5) lf+= 0.25;
        else lf-= 0.25;
        if(br > 100) br = 50;
        else if(br <= 20) br = 70; 
        if(tp <= top - 300) tp = top;
        if(tp <= top + 300) tp = top;
        if(lf >= 90) lf = 50; 
        if(lf <= 10) lf = 50; 
        if(sh < size/4) sh = size;
        if(sw < size/4) sw = size;
        if(sh > size*2) sh = size;
        if(sw > size*2) sw = size;
        if(blob){
                switch(c){
                case 0:
                    blob.style.borderTopLeftRadius = br + "% "; break;
                case 1:
                    blob.style.borderTopRightRadius = br + "% "; break;
                case 2:
                    blob.style.borderBottomRightRadius = br + "% "; break;
                case 3:
                    blob.style.borderBottomLeftRadius = br + "% "; break;
            }
        blob.style.top = tp + "px";
        blob.style.left = lf + "vw";
        blob.style.height = sh + "px";
        blob.style.width = sw + "px";
        }
    }, 5);    
}

if(window.innerWidth > 820){
    Blob(document.querySelector(".botblob"), 400, 2600, 40);
    Blob(document.querySelector(".topblob"), 200, 300, 20);
}
//----------------------------------------------------------------------------------------->
//----------------------------------------------------------------------------------------->
//----------------------------------------------------------------------------------------->


//hover state for touchscreens
document.querySelectorAll(".featured").forEach(tile => {
    tile.addEventListener("touchstart", () => {
        tile.hover();
    });
});