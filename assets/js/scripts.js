//----------------------------------------------------------------------------------------->
// nav & scroll scripts ----------------------------------------------------------->
//----------------------------------------------------------------------------------------->
if(window.innerWidth > 1240){
    let lastScrollTop = 0;
    let ref;
        
    window.addEventListener("scroll", UpdateNav);
    window.addEventListener("resize", UpdateNav);

    function UpdateNav(){
    const st = document.querySelector("html").scrollTop; 
    const nav = document.querySelector("#top-nav");
            
            //scrolling up---------------------------------------------------->
            if (st - 12 > lastScrollTop || st < 250 || window.innerWidth < 1200){
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
            else if(st + 12 < lastScrollTop && window.innerWidth > 1200) {
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

    // Note: for some frustrating reason this only works on apple browsers if 'var' is used to declare variables rather than the ES6 keywords

    var Typing = document.querySelector("#typing");
    var copy, backspacing, TypedChars, backspaceTo, lag, lag2;
    var cycle = 0;

    window.addEventListener("load", Type);
    window.addEventListener("resize", Type);
    window.addEventListener("blur", Reset);

    function Type(){
        copy = ["I can code.", "I can design.", "I can create.", "I can get it done!"];
        backspaceTo = 5;
        TypedChars = copy[cycle].split("");
        backspacing = false;
        Typing.innerHTML = copy[cycle];
        clearInterval(lag2); 
        lag2  = setInterval( () => {   
            lag = setInterval( () => {  
                    if (Typing.innerHTML.length == copy[cycle].length) backspacing = true;
                    
                    else if(Typing.innerHTML.length == backspaceTo){
                            backspacing = false;
                            cycle++;
                            if(cycle == 4) cycle = 0;
                            TypedChars = copy[cycle].split("");
                    }

                    if (backspacing == true && Typing.innerHTML.length > backspaceTo) Typing.innerHTML = Typing.innerHTML.slice(0, -1);  
    
                    if(backspacing == false && Typing.innerHTML.length >= backspaceTo){ 
                        if (Typing.innerHTML.length < copy[cycle].length) Typing.innerHTML += TypedChars[Typing.innerHTML.length];
                        if (Typing.innerHTML.length == copy[cycle].length) clearInterval(lag); 
                    }
            }, 200);     
        }, 6000);  
    }
    
    function Reset(){
        clearInterval(lag2); 
        window.addEventListener("focus", () => {
            Type();
        });
    } 


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
   
    function Blob(e){
        let blob = document.querySelector(".blob");
        let br = 50;
        let s = 200;
        blob.style.left = e.clientX + "px";
        blob.style.top = e.clientY + "px";


        setInterval( () => {
            blob.style.borderRadius = "50% 50% 50% 50% ";
            let rd = Math.random();
          
            let sr = Math.random();
            let c = Math.floor(Math.random()*4);
            console.log(c);
            if(rd > 0.5) br+= 5;
            else br-= 5;
            if(sr > 0.5) s+= 1;
            else s-= 1;
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

            blob.style.height = s + "px";
            blob.style.width = s + "px";
        }, 4000);    
    }
    window.addEventListener("mousemove", (e) => Blob(e) );
   
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