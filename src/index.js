fetch('http://localhost:3000/ramens').then((resp) => resp.json()).then((data) => renderRamen(data));

const div = document.querySelector("#ramen-menu")
// console.log(div)
const ramenName = document.querySelector(".name")
// console.log(ramenName);
const ramenRestaurant = document.querySelector(".restaurant");
// console.log(ramenRestaurant);
const displayRamen = document.querySelector(".detail-image")
// console.log(displayRamen):
const ratingDisplay = document.querySelector("#rating-display");
// console.log(ratingDisplay);
const commentDisplay = document.querySelector("#comment-display");
// console.log(commentDisplay);


function renderRamen(data){
    data.forEach((ramenObj) => {
        const imgTag = document.createElement("img");
        // console.log(imgTag)
        imgSrc = ramenObj.image
        // console.log(imgSrc)
        imgTag.src = imgSrc
        const li = document.createElement("li");
        li.appendChild(imgTag);
        div.appendChild(li);


        li.addEventListener('click', () => {
            ramenName.textContent = ramenObj.name;
            ramenRestaurant.textContent = ramenObj.restaurant;
            displayRamen.src = ramenObj.image;
            ratingDisplay.textContent = ramenObj.rating;
            commentDisplay.textContent = ramenObj.comment;
        })
    })
}

const form = document.querySelector("form");
// console.log(form);
const newName = document.querySelector("#new-name");
// console.log(newName);
const newRestaurant = document.querySelector("#new-restaurant");
// console.log(newRestaurant);
const newImg = document.querySelector("#new-image");
// console.log(newImg)
const newRating = document.querySelector("#new-rating");
// console.log(newRating);
const newComment = document.querySelector("#new-comment");
console.log(newComment);
