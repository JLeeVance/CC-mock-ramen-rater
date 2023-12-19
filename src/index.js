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
function setDefault (data) {
    ramenName.textContent = data[0].name,
    ramenRestaurant.textContent = data[0].restaurant,
    displayRamen.src = data[0].image,
    ratingDisplay.textContent = data[0].rating,
    commentDisplay.textContent = data[0].comment
};

function renderRamen(data){
    data.forEach((ramenObj) => {
        const imgTag = document.createElement("img");
        // console.log(imgTag)
        imgSrc = ramenObj.image
        // console.log(imgSrc)
        imgTag.src = imgSrc
        // const li = document.createElement("li");
        // li.appendChild(imgTag);
        div.appendChild(imgTag);


        imgTag.addEventListener('click', () => {
            ramenName.textContent = ramenObj.name;
            ramenRestaurant.textContent = ramenObj.restaurant;
            displayRamen.src = ramenObj.image;
            ratingDisplay.textContent = ramenObj.rating;
            commentDisplay.textContent = ramenObj.comment;
        })
    })
    setDefault(data);
    
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
// console.log(newComment);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = e.target[0].value;
    // console.log(nameInput);
    const restInput = e.target[1].value;
    // console.log(restInput);
    const imgSrcInput = e.target[2].value;
    // console.log(imgSrcInput);
    const ratingInput = e.target[3].value;
    // console.log(ratingInput);
    const commentInput = e.target[4].value;
    // console.log(commentInput);
    const postObject = {
        name:  nameInput ,
        restaurant: restInput,
        image: imgSrcInput ,
        rating: ratingInput,
        comment: commentInput,
    };
    console.log(postObject);

    fetch('http://localhost:3000/ramens', {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
        },
        body: JSON.stringify(postObject),
    }).then((resp) => resp.json())
    .then((data) => renderRamen([data]))
})
