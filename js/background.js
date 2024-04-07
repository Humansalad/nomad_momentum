const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
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
bgImage.width = 1080;
document.body.appendChild(bgImage);
*/
const body = document.querySelector("body");
document.body.style.backgroundImage = `url(css/Photo/${chosenImage})`;
document.body.style.backgroundSize ="cover";
/*document.body.style.backgroundPosition="center"*/
document.body.style.backgroundRepeat="no-repeat"