let addArtistBtn = document.querySelector("#artist-btn");
let form = document.querySelector("form");
let formBtn = document.querySelector("#form-btn");
let artistList = document.querySelector("#artists");

addArtistBtn.onclick = () => {
    if (form.style.display !== "none") {
        form.style.display = "none";
        form.reset();
    }
    else {
        form.style.display = "block";
    }
}



form.onsubmit = (e) => {
    e.preventDefault();
    let newArtist = document.createElement("div");
    newArtist.setAttribute("class", "cards");
    
    let inputs = document.querySelectorAll("form > input");
    let name = inputs[0].value;
    let about = inputs[1].value;
    let url = inputs[2].value;

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
    div.append(descDiv)
    
    newArtist.append(div);

    let delbtn = document.createElement("button");
    delbtn.setAttribute("class", "delete");
    delbtn.textContent = "Delete";

    delbtn.onclick = () => {
        delbtn.parentElement.remove();
    }

    newArtist.append(delbtn);
    
    artists.append(newArtist);
}
