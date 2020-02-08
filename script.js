
let addArtistBtn = document.querySelector("#artist-btn");
let form = document.querySelector("form");
let formBtn = document.querySelector("#form-btn");
let artistList = document.querySelector("#artists");
let searchBar = document.querySelector("#input");
let artistArr = [];
let nameArr = [];

let tempStr = "";

for (let i = 0; i < localStorage.length; i++) {
    tempStr += localStorage.getItem(localStorage.key(i));
}



addArtistBtn.onclick = () => {
    if (form.style.display !== "none") {
        form.style.display = "none";
        form.reset();
    }
    else {
        form.style.display = "block";
    }
}

artistList.innerHTML = tempStr;

let id = 1;

form.onsubmit = (e) => {
    e.preventDefault();
    
    
    let inputs = document.querySelectorAll("form > input");
    let name = inputs[0].value;
    let about = inputs[1].value;
    let url = inputs[2].value;

    let newArtist = document.createElement("div");
    newArtist.setAttribute("class", "cards");
    newArtist.setAttribute("id", id);

    let img = document.createElement("img");
    img.setAttribute("src", url);
    newArtist.append(img);
    
    let div = document.createElement("div");
    div.setAttribute("class", "profile");
    
    let nameDiv = document.createElement("div");
    nameDiv.setAttribute("class", "names");
    nameDiv.textContent = name;
    div.append(nameDiv);

    let descDiv = document.createElement("div");
    descDiv.setAttribute("class", "descriptions")
    descDiv.textContent = about;
    div.append(descDiv);
    
    newArtist.append(div);

    let delbtn = document.createElement("button");
    delbtn.setAttribute("class", "delete");
    delbtn.setAttribute("onclick", "delfunc(this)")
    delbtn.setAttribute("value", id);
    delbtn.textContent = "Delete";
    id++;
    newArtist.append(delbtn);
    
    artistList.append(newArtist);
    artistArr.push(newArtist);
    nameArr.push(name)

    localStorage.setItem("data", artistList.innerHTML);

    form.reset();
}

function delfunc(e) {
    e.parentElement.remove();
    let dat = localStorage.getItem("data");
    let idIndex = dat.indexOf(`id="${e.value}"`)
    let deleteIndex = idIndex - 19;
    let valIndex = dat.indexOf(`value="${e.value}"`);
    let endIndex = valIndex + 30;
    console.log(idIndex, valIndex);
    dat = dat.substr(0, deleteIndex) + dat.substr(endIndex + 1);
    localStorage.setItem("data", dat);
}

searchBar.oninput = (e) => {
    let keyword = searchBar.value.toLowerCase();
    let indexes = searchedIndex(keyword);

    if (keyword !== "") {
        while (artistList.firstChild) {
            artistList.removeChild(artistList.firstChild);
        }
        
        for (i of indexes) {
            artistList.append(artistArr[i]);
        }
    } else {
        for (i of artistArr) {
            artistList.append(i);
        }
    }
    
    
    
}

function searchedIndex(searchWord) {
    let indexArr = [];
    for (let i = 0; i < nameArr.length; i++) {
        if (nameArr[i].toLowerCase().includes(searchWord)) {
            indexArr.push(i);
        }
    }
    return indexArr;
}
