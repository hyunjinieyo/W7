const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img"); //html img 요소 추가하기

bgImage.src = `img/${chosenImage}`; // 이미지별 경로 설정

document.body.appendChild(bgImage);
