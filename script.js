const playGround = document.querySelector(".play-ground")
const userPoint = {
    x: 9, y: 20
}
let currentUserX = userPoint.x;
let currentUserY = userPoint.y;
let randomNumber;

const clearPlayGround = () => {
    playGround.innerHTML = ""
}
// arr for black Bubbles
let blackBubbles = [
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 3, y: 3 },
    { x: 4, y: 3 },
    { x: 4, y: 4 },
    { x: 5, y: 4 },
    { x: 5, y: 5 },
    { x: 6, y: 5 },
    { x: 6, y: 6 },
    { x: 7, y: 6 },
    { x: 7, y: 7 },
    { x: 8, y: 7 },
    { x: 8, y: 8 },
    { x: 9, y: 1 },
    { x: 9, y: 2 },
    { x: 9, y: 3 },
    { x: 9, y: 4 },
    { x: 9, y: 5 },
    { x: 9, y: 6 },
    { x: 9, y: 7 },
    { x: 9, y: 8 },
    { x: 9, y: 9 },
    { x: 10, y: 1 },
    { x: 10, y: 2 },
    { x: 10, y: 3 },
    { x: 10, y: 4 },
    { x: 10, y: 5 },
    { x: 10, y: 6 },
    { x: 10, y: 7 },
    { x: 10, y: 8 },
    { x: 10, y: 9 },
    { x: 11, y: 7 },
    { x: 11, y: 8 },
    { x: 12, y: 6 },
    { x: 12, y: 7 },
    { x: 13, y: 5 },
    { x: 13, y: 6 },
    { x: 14, y: 4 },
    { x: 14, y: 5 },
    { x: 15, y: 3 },
    { x: 15, y: 4 },
    { x: 16, y: 2 },
    { x: 16, y: 3 },
    { x: 17, y: 2 },
    { x: 17, y: 1 },
    { x: 18, y: 1 },

]

// arr of red Bubbles
let redBubbles = [
    { x: 1, y: 2 },
    { x: 1, y: 3 },
    { x: 1, y: 4 },
    { x: 2, y: 3 },
    { x: 2, y: 4 },
    { x: 3, y: 4 },
    { x: 1, y: 5 },
    { x: 2, y: 5 },
    { x: 3, y: 5 },
    { x: 4, y: 5 },
    { x: 1, y: 6 },
    { x: 2, y: 6 },
    { x: 3, y: 6 },
    { x: 4, y: 6 },
    { x: 5, y: 6 },
    { x: 1, y: 7 },
    { x: 2, y: 7 },
    { x: 3, y: 7 },
    { x: 4, y: 7 },
    { x: 5, y: 7 },
    { x: 6, y: 7 },
    { x: 1, y: 8 },
    { x: 2, y: 8 },
    { x: 3, y: 8 },
    { x: 4, y: 8 },
    { x: 5, y: 8 },
    { x: 6, y: 8 },
    { x: 7, y: 8 },
    { x: 1, y: 9 },
    { x: 2, y: 9 },
    { x: 3, y: 9 },
    { x: 4, y: 9 },
    { x: 5, y: 9 },
    { x: 6, y: 9 },
    { x: 7, y: 9 },
    { x: 8, y: 9 },
]


// arr of blue bubbles
let blueBubbles = [
    { x: 11, y: 9 },
    { x: 12, y: 9 },
    { x: 12, y: 8 },
    { x: 13, y: 9 },
    { x: 13, y: 8 },
    { x: 13, y: 7 },
    { x: 14, y: 6 },
    { x: 14, y: 7 },
    { x: 14, y: 8 },
    { x: 14, y: 9 },
    { x: 15, y: 5 },
    { x: 15, y: 6 },
    { x: 15, y: 7 },
    { x: 15, y: 8 },
    { x: 15, y: 9 },
    { x: 16, y: 4 },
    { x: 16, y: 5 },
    { x: 16, y: 6 },
    { x: 16, y: 7 },
    { x: 16, y: 8 },
    { x: 16, y: 9 },
    { x: 17, y: 3 },
    { x: 17, y: 4 },
    { x: 17, y: 5 },
    { x: 17, y: 6 },
    { x: 17, y: 7 },
    { x: 17, y: 8 },
    { x: 17, y: 9 },
    { x: 18, y: 2 },
    { x: 18, y: 3 },
    { x: 18, y: 4 },
    { x: 18, y: 5 },
    { x: 18, y: 6 },
    { x: 18, y: 7 },
    { x: 18, y: 8 },
    { x: 18, y: 9 }
]

// display user
const bubbleOfUser = () => {
    if (randomNumber === undefined) {
        randomNumber = Math.floor(Math.random() * 3)
    }
    // removing existing user Bubbles
    const existingUser = document.querySelector(".user")
    if (existingUser) {
        existingUser.remove()
    }

    const user = document.createElement("div")
    if (randomNumber === 0) {
        user.classList.add("red", "user");
    }
    else if (randomNumber === 1) {
        user.classList.add("blue", "user")
    }
    else if (randomNumber === 2) {
        user.classList.add("black", "user")
    }
    playGround.appendChild(user)
    user.style.gridColumn = currentUserX;
    user.style.gridRow = currentUserY;
}


// black bubbles display function
const displayBlackBubbles = () => {

    for (let i = 0; i < blackBubbles.length; i++) {
        const bubble = document.createElement("div")
        bubble.classList.add("black", "bubbles")
        playGround.appendChild(bubble)
        bubble.style.gridColumn = blackBubbles[i].x;
        bubble.style.gridRow = blackBubbles[i].y;
    }
}

// red bubbles display function
const displayRedBubbles = () => {
    for (let i = 0; i < redBubbles.length; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("red", "bubbles");
        playGround.appendChild(bubble)
        bubble.style.gridColumn = redBubbles[i].x;
        bubble.style.gridRow = redBubbles[i].y;

    }
}

// blue Bubbles display function
const displayBlueBubbles = () => {
    for (let i = 0; i < blueBubbles.length; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("blue", "bubbles")
        playGround.appendChild(bubble)
        bubble.style.gridColumn = blueBubbles[i].x;
        bubble.style.gridRow = blueBubbles[i].y;
    }
}


// user Bubble horizontal scrolling bar
const userBar = (e) => {
    switch (e.key) {
        case "ArrowRight":
            if (currentUserX >= 1 && currentUserX < 18) {
                currentUserX += 1;
            }
            break;
        case "ArrowLeft":
            if (currentUserX <= 18 && currentUserX > 1) {
                currentUserX -= 1;
            }
            break;
    }
    bubbleOfUser()
}

// user Bubbles move upward
const spaceBar = (e) => {
    if (e.key === " ") {
        upWard()
    }
}
const upWard = () => {
    const intervalId = setInterval(() => {
        currentUserY -= 1;
        bubbleOfUser()
        // black bubbles
        if (randomNumber === 2) {
            for (let i = 0; i < blackBubbles.length; i++) {
                if (currentUserY - 1 === blackBubbles[i].y && currentUserX === blackBubbles[i].x) {
                    clearInterval(intervalId);
                    blackBubbles = [];
                }
                else if(blackBubbles[i].y !== currentUserY && currentUserX !== blackBubbles[i].x){
                    clearInterval(intervalId);

                }
                randomNumber = Math.floor(Math.random() * 3)
                    currentUserX = userPoint.x;
                    currentUserY = userPoint.y;
                    render()

            }
        }
        // blue Bubbles
        else if (randomNumber === 1) {
            for (let i = 0; i < blueBubbles.length; i++) {
                if (currentUserY - 1 === blueBubbles[i].y && currentUserX === blueBubbles[i].x) {
                    clearInterval(intervalId);
                    blueBubbles = [];
                }
                else if(blueBubbles[i].y !== currentUserY && currentUserX !== blueBubbles[i].x){
                    clearInterval(intervalId);

                }
                randomNumber = Math.floor(Math.random() * 3)
                currentUserX = userPoint.x;
                currentUserY = userPoint.y;
                render()
            }

        }
        // red bubbles
        else if (randomNumber === 0) {
            for (let i = 0; i < redBubbles.length; i++) {
                if (currentUserY - 1 === redBubbles[i].y && currentUserX === redBubbles[i].x) {
                    clearInterval(intervalId);
                    redBubbles = [];
                }
                else if(redBubbles[i].y !== currentUserY && currentUserX !== redBubbles[i].x){
                    clearInterval(intervalId);

                }
                randomNumber = Math.floor(Math.random() * 3)
                currentUserX = userPoint.x;
                currentUserY = userPoint.y;
                render()
            }
        }


    }, 100);
}
const render = () => {
    clearPlayGround()
    displayBlackBubbles()
    displayRedBubbles()
    displayBlueBubbles()
    bubbleOfUser()
}

document.addEventListener("keydown", userBar)
document.addEventListener("keydown", spaceBar)
render()