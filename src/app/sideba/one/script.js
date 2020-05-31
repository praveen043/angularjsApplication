var ImageList = ["https://i.picsum.photos/id/1004/5616/3744.jpg", "https://i.picsum.photos/id/1003/1181/1772.jpg", "https://i.picsum.photos/id/1001/5616/3744.jpg", "https://i.picsum.photos/id/1000/5626/3635.jpg"]

// Run when the page is loaded
window.onload = function () {
    addImage(ImageList);
}

//Function to load all the images mentioned in the ImageList 
function addImage(imageArray) {

    var main = document.getElementById("images");

    //Looping through all the values in the array
    imageArray.forEach((element) => {
        child = document.createElement("div");
        child.className = "image";
        child.innerHTML = "<img src=\"" + element + "\"></img>" + "<div class=\"buttons\">"
            + "<div class=\"button\" onclick=\"resize(this)\"> Medium </div>"
            + "<div class=\"button\" onclick=\"toTop(this)\"> Top </div>"
            + "<div class=\"button\" onclick=\"toLeft(this)\"> Left </div>"
            + "<div class=\"button\" onclick=\"toRight(this)\"> Right </div>"
            + "<div class=\"button\" onclick=\"toBottom(this)\"> Bottom </div>" + "</div>";
            //added the images and buttons required

        // adding as a child div under images div 
        main.append(child);
    });
}

//To clear all the images
function clearImages() {
    var main = document.getElementById("images");
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

function resize(element) {
    var img = element.parentNode.previousSibling;
    var imgSize = element.innerHTML;

    if (imgSize == " Medium ") {
        element.innerHTML = " Large "
        img.style.width = "60%";
    }
    else if (imgSize == " Large ") {
        element.innerHTML = " Small "
        img.style.width = "80%";
    }
    else if (imgSize == " Small ") {
        element.innerHTML = " Medium "
        img.style.width = "40%";
    }
}

function toTop(element) {
    var img = element.parentNode.previousSibling.getAttribute("src");
    var imgIndex = ImageList.indexOf(img);

    ImageList.splice(imgIndex, 1);
    ImageList.unshift(img);

    clearImages();
    addImage(ImageList);
}

function toBottom(element) {
    var img = element.parentNode.previousSibling.getAttribute("src");
    var imgIndex = ImageList.indexOf(img);

    ImageList.splice(imgIndex, 1);
    ImageList.push(img);

    clearImages();
    addImage(ImageList);
}

function toLeft(element) {
    var img = element.parentNode.previousSibling.getAttribute("src");
    var imgIndex = ImageList.indexOf(img);

    if (imgIndex > 0) {
        swap(ImageList, imgIndex, imgIndex - 1)
    }

    clearImages();
    addImage(ImageList);
}

function toRight(element) {
    var img = element.parentNode.previousSibling.getAttribute("src");
    var imgIndex = ImageList.indexOf(img);

    if (imgIndex < ImageList.length - 1) {
        swap(ImageList, imgIndex, imgIndex + 1)
    }

    clearImages();
    addImage(ImageList);
}

function swap(array, fromIndex, toIndex) {
    var temp = array[fromIndex];
    array[fromIndex] = ImageList[toIndex];
    array[toIndex] = temp;
}