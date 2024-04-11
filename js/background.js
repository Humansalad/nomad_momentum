const images = [
    "1.jpg"
]
function rand(Max) {
    return Math.floor(Math.random() * (Max));
  }

const imageNumb = images.length;
const RandomImageNumber = rand(imageNumb);
const chosenImage = images[RandomImageNumber];

/*
const bgImage = document.createElement("img");
bgImage.src = `css/Photo/${chosenImage}`;
bgImage.height = 1080;
document.body.appendChild(bgImage);
*/
const body = document.querySelector("body");
document.body.style.backgroundImage = `url(css/Photo/${chosenImage})`;
document.body.style.backgroundSize ="cover";
/*document.body.style.backgroundPosition="center"*/
document.body.style.backgroundRepeat="no-repeat"
