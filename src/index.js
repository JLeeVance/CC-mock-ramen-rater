fetch('http://localhost:3000/ramens').then((resp) => resp.json()).then((data) => renderRamen(data));

const div = document.querySelector("#ramen-menu")
// console.log(div)
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
        })
    const ramenName = document.querySelector(".name")
    console.log(ramenName);
    const ramenRestaurant = document.querySelector(".restaurant");
    console.log(ramenRestaurant);


}
