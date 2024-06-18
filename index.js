function Menu(e){
    let list = document.querySelector("ul");

    e.name === "menu" 
    ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) 
    : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
}

// testimonials
const userTexts = document.getElementsByClassName("user-text");
const userPics = document.getElementsByClassName("user-pic");
function showReview() {
    for(userPic of userPics) {
        userPic.classList.remove("active-pic");
    }
    for(userText of userTexts){
        userText.classList.remove("active-text");
    }
    let i = Array.from(userPics).indexOf(event.target);

    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");
}

// Damn!!