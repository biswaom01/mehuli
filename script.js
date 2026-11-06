// FIND THE BUTTON
const exploreButton = document.getElementById("exploreButton");

// FIND THE NEXT SECTION
const nextSection = document.getElementById("nextSection");

// WHEN THE BUTTON IS CLICKED
exploreButton.addEventListener("click", function() {

    // SHOW THE NEXT SECTION
    nextSection.classList.add("show");

    // SCROLL DOWN TO IT
    nextSection.scrollIntoView({
        behavior: "smooth"
    });

});

// FIND THE ENVELOPE BUTTON

const openLetterButton =
    document.getElementById("openLetterButton");

// FIND THE LOVE LETTER

const loveLetter =
    document.getElementById("loveLetter");

// OPEN THE LETTER WHEN CLICKED

openLetterButton.addEventListener("click", function() {

    loveLetter.classList.add("show");

    openLetterButton.textContent = "💗 Letter opened";

    loveLetter.scrollIntoView({
        behavior: "smooth"
    });

});

// FIND THE SURPRISE BUTTON

const surpriseButton =
    document.getElementById("surpriseButton");

// FIND THE SURPRISE MESSAGE

const surpriseMessage =
    document.getElementById("surpriseMessage");

// FIND THE HEARTS CONTAINER

const heartsContainer =
    document.getElementById("hearts-container");

// WHEN THE SURPRISE BUTTON IS CLICKED

surpriseButton.addEventListener("click", function() {

    // REVEAL THE MESSAGE

    surpriseMessage.classList.add("show");

    // CHANGE BUTTON TEXT

    surpriseButton.textContent = "Sending you love ❤️";

    // CREATE 25 FLOATING HEARTS

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("span");

        heart.classList.add("floating-heart");

        heart.textContent = "♥";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.animationDelay = Math.random() * 1.5 + "s";

        heartsContainer.appendChild(heart);

        // REMOVE HEART AFTER ANIMATION

        heart.addEventListener("animationend", function() {
            heart.remove();
        });

    }

    // SCROLL TO THE MESSAGE

    surpriseMessage.scrollIntoView({
        behavior: "smooth"
    });

});