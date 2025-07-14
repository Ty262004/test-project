let myFile = document.getElementById("file");
let iconProfile = document.querySelector("#iconProfile");
let img = document.querySelector("#img");

myFile.addEventListener("change", () => {
    let myimage = myFile.files[0];
    let imgurl = URL.createObjectURL(myimage);
    img.setAttribute("src", imgurl);
    iconProfile.classList.add("remove");
    img.classList.remove("hidden");
});
