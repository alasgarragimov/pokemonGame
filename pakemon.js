function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * gameRules.length);
    return gameRules[randomIndex];
}


function resultGame(u, c) {
    console.log("User Choice:", u);
    console.log("Computer Choice:", c);
    showImg1.src = `image/${u}.png`;
    showImg2.src = `image/${c}.png`;

    switch (true) {
        case u === "w" && c === "f":
            alert("You Win: WATER wins FIRE");
            firstPlayerPoint += 1;
            cardPoint1.innerHTML = firstPlayerPoint

            userResult1.innerHTML = "WIN"
                //!eger adi style color vermek lazimdirsa bele yaziriq.
            userResult1.style.color = "green"

            //!bunu bootstrap oldugu ucun bele yazdim
            // userResult1.classList.add("text-seccess");

            compResult2.innerHTML = "Lose";
            compResult2.style.color = "red"

            break;
        case u === "f" && c === "e":
            alert("You Win: FIRE wins ELECTRIC");
            firstPlayerPoint += 1;
            cardPoint1.innerHTML = firstPlayerPoint

            userResult1.innerHTML = "WIN"
            userResult1.style.color = "green"


            compResult2.innerHTML = "Lose";
            compResult2.style.color = "red"
            break;
        case u === "e" && c === "w":
            alert("You Win: ELECTRIC wins WATER");
            firstPlayerPoint += 1;
            cardPoint1.innerHTML = firstPlayerPoint

            userResult1.innerHTML = "WIN"
            userResult1.style.color = "gren"


            compResult2.innerHTML = "Lose";
            compResult2.style.color = "red"

            break;
        case u === c:
            alert("Game ending in a DRAW");

            userResult1.innerHTML = "Draw";
            userResult1.style.color = "gray"

            compResult2.innerHTML = "Draw";
            compResult2.style.color = "gray"

            break;
        default:
            alert("You are defeated.");
            secondPlayerPoint += 1;
            cardPoint2.innerHTML = secondPlayerPoint

            compResult2.innerHTML = "WIN"
            compResult2.style.color = "green"

            userResult1.innerHTML = "Lose"
            userResult1.style.color = "red"
    }
}


const gameRules = ["e", "f", "w"];
let firstPlayerPoint = 0;
let secondPlayerPoint = 0;

const cardPoint1 = document.querySelector("#cardPoint1");
const cardPoint2 = document.querySelector("#cardPoint2");

const userResult1 = document.querySelector("#userResult1");
const compResult2 = document.querySelector("#compResult2");

const showImg1 = document.querySelector("#showImg1");
const showImg2 = document.querySelector("#showImg2");





window.addEventListener('keypress', (e) => {
    const userChoice = e.key.toLowerCase();

    if (gameRules.indexOf(userChoice) !== -1) {
        const compChoice = getRandomChoice();
        resultGame(userChoice, compChoice);
    } else {
        console.log("Choose the right alphabet example (e, f, w).");
    }
});