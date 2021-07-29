//Patient Journey scripts

const vid = qs(".pj-video video");
const grid = qs(".pj-grid");
const sections = qsa(".pj-section");
let isMobile = undefined;
let vw, vh;

function GetViewPortSize(){
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let prev = isMobile;
    if(vw < 1000) isMobile = true;
    else isMobile = false;
    if(prev != undefined && prev != isMobile) location.reload();
}

function ResizeGrid(){
    vid.setAttribute("width", vw);
    vid.setAttribute("height", vw*0.5625);
    grid.style.height = `${vw*0.5625}px`;
}

function ActivateGrid(){
    for(let i = 0; i < sections.length; i++){
        sections.forEach(s => s.classList.remove("open-section"));
        sections[i].style.width = `${vw/sections.length}px`;
        let h2 = NewElement("h2", false, false);
        let icon = NewElement("img", ["plus-icon"], false);
        icon.setAttribute("src", "assets/img/circplus.svg");
        sections[i].appendChild(h2);
        sections[i].appendChild(icon);
        let gridTemplate = "";
        let gradientString = "";
        for(let j = 1; j <= i; j++) gridTemplate += "60px ";
        gridTemplate += "auto";
        for(let k = i + 1; k < sections.length; k++) gridTemplate += " 60px";
        ael(sections[i], "click", () => {
            if(sections[i].classList.contains("open-section")) return;
            else{
                sections.forEach(s => s.classList.remove("open-section"));
                if(!isMobile) grid.style.gridTemplateColumns = gridTemplate;
                if(!isMobile) grid.classList.add("vertical-text");
                let index = sections[i].getAttribute("data-idx") - 1;
                for(a = 0; a < sections.length; a++) if(a != index) {
                    if(!isMobile) sections[a].style.width = "60px";
                    else sections[a].style.height = "60px";
                }
                let gradient = ["#009444 ","#fae200 ","#ee8922 ","#e12727 ","#de1b83 ","#935aa5 ","#1e2859 ","#049fda "];
                let gradientCountingUp = 30;
                if(isMobile) gradientString = gradientString;
                else{
                    for(let k = 0; k <= index; k++){
                        gradient[k] = `${gradient[k]}${gradientCountingUp}px`;
                        if(k == index) gradient[k] += `, ${gradient[k].substring(0,7)} `;
                        gradientCountingUp += 60;
                    }
                    let gradientCountingDown = vw - 30;
                    for(let l = sections.length - 1; l >= index; l--){
                        gradient[l] = `${gradient[l]}${gradientCountingDown}px`;
                        gradientCountingDown -= 60;
                    }
                    gradientString = "linear-gradient(to right, ";
                    for(let m = 0; m < gradient.length; m++) gradientString += `${gradient[m]}, `;
                    gradientString += "#009444 103.125%)";
                }
                qs(".pj-gradient").style.background = gradientString;
                for(let i = 0; i < sections.length; i++) sections[i].style.borderColor = "rgba(0, 160, 223, 0.5)";
                RenderInternalContent(index + 1);
                if(!isMobile) sections[index].style.width = `${vw - (60*(sections.length - 1))}px`;
                else{
                    sections[index].style.height = `${GetDimensions(sections[index].children[2]).height}px`;
                    qs("footer").style.marginTop = `${GetDimensions(sections[index].children[2]).height - 390}px`;
                    sections[index].style.borderColor = gradient[i];
                    for(let v = 0; v < sections.length; v++) sections[v].style.background = gradient[i];
                    if(i != 1){
                        for(let f = 0; f < sections.length; f++) sections[f].firstElementChild.style.color = "#fff";
                        for(let y = 0; y < sections.length; y++) sections[y].children[1].style.filter = "brightness(99)";
                        for(let w = 0; w < sections.length; w++) sections[w].style.borderColor = "#fff";
                    }
                    else{
                        for(let p = 0; p < sections.length; p++) sections[p].firstElementChild.style.color = "var(--primary-color)";
                        for(let b = 0; b < sections.length; b++) sections[b].children[1].style.filter = "none";
                        for(let u = 0; u < sections.length; u++) sections[u].style.borderColor = "var(--primary-color)";
                    }
                }
                setTimeout( () => { if(qs(".pj-internal-content")) qs(".pj-internal-content").classList.add("fade-in"); }, 2);
                let closeButton = qs(".cat_close");
                ael(closeButton, "click", () => { CloseCategory(index); });
                sections[index].classList.add("open-section");
            }
        });
    }
}

function RenderInternalContent(category){
    const c = qs(`.pj-section[data-idx='${category}']`);
    qsa(".pj-internal-content").forEach(int => { int.remove(); });
    const internalContainer = NewElement("div", ["pj-internal-content", "hzero"], false);
    c.appendChild(internalContainer);
    const internalSidebar =  NewElement("div", ["pj-internal-sidebar"], false);
    internalContainer.appendChild(internalSidebar);
    NewElement("div", ["pj-internal-main"], internalSidebar);
    internalSidebar.appendChild(NewElement("img", false, false));
    qs(".pj-internal-sidebar img").setAttribute("src", fields.categories[category - 1].image);
    internalSidebar.appendChild(NewElement("p", false, false));
    qs(".pj-internal-sidebar p").innerHTML = fields.categories[category - 1].sidebarText;
    internalSidebar.appendChild(NewElement("a", false, false));
    qs(".pj-internal-sidebar a").innerHTML = fields.categories[category - 1].buttonText;
    qs(".pj-internal-sidebar a").setAttribute("href", fields.categories[category- 1].buttonLink);
    qs(".pj-internal-main").appendChild(NewElement("h3", false, false));
    qs(".pj-internal-main h3").innerHTML = "<img src='" + fields.categories[category - 1].icon + "'>" + fields.categories[category - 1].title;
    NewElement("h4", [], qs(".pj-internal-main h3"));
    qs(".pj-internal-main h4").innerHTML = fields.categories[category- 1].headline1;
    NewElement("p", [], qs(".pj-internal-main h4"));
    qs(".pj-internal-main p").innerHTML = fields.categories[category - 1].paragraphText1;
    NewElement("h4", [], qs(".pj-internal-main p"));
    qs(".pj-internal-main h4:nth-of-type(2)").innerHTML = fields.categories[category - 1].headline2;
    NewElement("p", [], qs(".pj-internal-main h4:nth-of-type(2)"));
    qs(".pj-internal-main p:nth-of-type(2)").innerHTML = fields.categories[category - 1].paragraphText2;
    NewElement("div", ["close-section-btn"], qs(".pj-internal-main"));
    let closeButton = `<div class="cat_close"><div class="close-inner"><span></span><span></span></div></div>`;
    qs(".close-section-btn").innerHTML = closeButton;
    ael(qs(".close-section-btn"), "click", CloseCategory);
    let subNav = NewElement("div", ["pj-internal-subnav"], qs(".pj-internal-main p:nth-of-type(2)")); let r;
    for(v=0;v<4;v++){
        if(v<2) r = NewElement("a", [], false);
        else r = NewElement("div", [], false);
        qs(".pj-internal-subnav").appendChild(r); 
    }
    let snc = qsarray(".pj-internal-subnav a");
    snc.push(qs(".pj-internal-subnav div"));
    snc.push(qsa(".pj-internal-subnav div")[qsa(".pj-internal-subnav div").length - 1]);
    if(category == 1) snc[0].innerHTML = "← " + fields.categories[fields.categories.length - 1].title;
    else snc[0].innerHTML = "← " + fields.categories[category - 2].title;
    if(category >= fields.categories.length - 1) snc[1].innerHTML = fields.categories[0].title + " →";
    else snc[1].innerHTML = fields.categories[category].title + " →";
    snc[2].innerHTML = "Previous";
    snc[3].innerHTML = "Next";
    ael(snc[0], "click", () =>{ 
       if(category == 1) localStorage.setItem("OPENCAT", 7);
       else localStorage.setItem("OPENCAT", category - 2);
       location.reload();
    });
    ael(snc[1], "click", () =>{
       if(category == 8) localStorage.setItem("OPENCAT", 0);
       else localStorage.setItem("OPENCAT", category);
       location.reload();
    });
}

function CloseCategory(){
    grid.classList.remove("vertical-text");
    qs(".pj-gradient").style.background = "linear-gradient(to right, #009444 6.25%, #fae200 18.75%, #ee8922 31.25%, #e12727 43.75%, #de1b83 56.25%, #935aa5 68.75%, #1e2859 81.25%, #049fda 93.75%, #009444 106.25%)";
    if(!isMobile) for(let i = 0; i < sections.length; i++) sections[i].style.width = `initial !important`;
    if(!isMobile) grid.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
    if(!isMobile) sections.forEach(s => { s.style.width = `${vw/sections.length}px`;});
    else sections.forEach(s => { s.style.height = "60px";});
    if(qs(".pj-internal-content")) qs(".pj-internal-content").remove();
    if(isMobile){
        qs(".open-section .plus-icon").style.display = "block";
        qs("footer").style.marginTop = "0px";
        qs(".open-section").style.borderColor = "rgba(0, 160, 223, 0.5)";
        for(let i = 0; i < sections.length; i++) sections[i].style.borderColor = "rgba(0, 160, 223, 0.5)";
        grid.style.background = "transparent";
        for(let f = 0; f < sections.length; f++) sections[f].firstElementChild.style.color = "var(--primary-color)";
        for(let y = 0; y < sections.length; y++) sections[y].children[1].style.filter = "none";
        for(let v = 0; v < sections.length; v++) sections[v].style.background = "none";
    }
    setTimeout( () => {if(qs(".open-section")) qs(".open-section").classList.remove("open-section") }, 200);
}

function FillInitialContent(){
    qs(".pj-headline").innerHTML = fields.headline;
    qs(".pj-introtext").innerHTML = fields.introText;
    for(let i=0; i<sections.length; i++) sections[i].children[0].innerHTML = fields.categories[i].title;
}

GetViewPortSize();
ResizeGrid();

ael(window, "resize", () => {
    GetViewPortSize();
    ResizeGrid();
});

if(localStorage.getItem("OPENCAT")) sections[parseInt(localStorage.getItem("OPENCAT"))].click();
localStorage.clear();

ActivateGrid();