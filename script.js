const body = document.getElementById("body");
const mainContent = document.getElementById("mainContent");
const playContent = document.getElementById("playContent");
const guideContent = document.getElementById("guideContent");
const knightsContent = document.getElementById("knightsContent");
const weaponsContent = document.getElementById("weaponsContent");
const backButton = document.getElementsByClassName("backButton");
let selectedKnight = "";
let levelsUnlocked = 5;
let knightsUnlocked = 1;
menu();

//Main Menu
function menu() {
    mainContent.style.display = "grid";
    playContent.style.display = "none";
    guideContent.style.display = "none";
    knightsContent.style.display = "none";
    weaponsContent.style.display = "none";

    const playButton = document.getElementById("playButton");
    const guideButton = document.getElementById("guideButton");
    const knightsButton = document.getElementById("knightsButton");
    const weaponsButton = document.getElementById("weaponsButton");
    const body = document.getElementById("body");

    playButton.addEventListener("click", playMenu);
    guideButton.addEventListener("click", guideMenu);
    knightsButton.addEventListener("click", knightsMenu);
    weaponsButton.addEventListener("click", weaponsMenu);

    body.style.backgroundImage = "url(./assets/backgroundImages/mainMenuBackgroundImage.png)";
}

//Play Menu
function playMenu() {
    playContent.style.display = "grid";
    mainContent.style.display = "none";
    body.style.backgroundImage = "url(./assets/playAssets/playMenuBackgroundImage.png)";
    const levels = document.getElementsByClassName("level");
    let levelSelected = 0;

    for(let i = 0; i < levels.length; i++){
        //unlocked levels are marked black
        if(i >= levelsUnlocked){
            levels[i].style.color = "black";
            levels[i].style.cursor = "default";
            levels[i].style.padding = "0px";
            levels[i].style.fontSize = "25px";
        }
        
        levels[i].addEventListener("click", function(){
            levelSelected = i + 1;
           
            switch(levelSelected){
                case 1:
                    levelOne();
                    break;
                case 2:
                    levelTwo();
                    break;
                case 3:
                    levelThree();
                    break;
                case 4:
                    levelFour();
                    break;
                case 5:
                    levelFive();
                    break;
                case 6:
                    levelSix();
                    break;
                case 7:
                    levelSeven();
                    break;
                case 8:
                    levelEight();
                    break;
                case 9:
                    levelNine();
                    break;
                default:

            }
        });
    }

    function levelOne(){

    };

    function levelTwo(){

    };

    function levelThree(){

    };

    function levelFour(){

    };

    function levelFive(){

    };

    function levelSix(){

    };

    function levelSeven(){

    };

    function levelEight(){

    };

    function levelNine(){

    };

    backButton[0].addEventListener("click", function(){
        menu();
    });
}

function guideMenu() {
    guideContent.style.display = "grid";
    mainContent.style.display = "none";
    body.style.backgroundImage = "url(./assets/guideImages/guideBackgroundImage.png)";

    backButton[1].addEventListener("click", function () {
        menu();
    });
}

//Knights Menu
function knightsMenu() {
    knightsContent.style.display = "grid";
    mainContent.style.display = "none";
    body.style.backgroundImage = "url(./assets/knightsAssets/knightsBackgroundImage.png)";
    const playableKnightsButton = document.getElementById("playableKnightsButton");
    const enemyKnightsButton = document.getElementById("enemyKnightsButton");
    const playableKnightsMenu = document.getElementById("playableKnightsMenu");
    const enemyKnightsMenu = document.getElementById("enemyKnightsMenu");
    const nextPage = document.getElementsByClassName("nextPage");
    const previousPage = document.getElementsByClassName("previousPage");
    let hasPlayedOnce = false;

    const knightsArray = [
        {
            knightName: "Infantry Knight",
            knightHealth: 100,
            knightWeapon: "Sword",
            knightLevel: 1,
            knightImage: "./assets/knightsAssets/infantryKnightImage.png",
        },
        {
            knightName: "Commander Knight",
            knightHealth: 150,
            knightWeapon: "Long Sword",
            knightLevel: 3,
            knightImage: "./assets/knightsAssets/commanderKnightImage.png",
        },
        {
            knightName: "Baron Knight",
            knightHealth: 200,
            knightWeapon: "Battle Axe",
            knightLevel: 5,
            knightImage: "./assets/knightsAssets/baronKnightImage.png",
        },
        {
            knightName: "Noble Knight",
            knightHealth: 300,
            knightWeapon: "Great Sword",
            knightLevel: 7,
            knightImage: "./assets/knightsAssets/nobleKnightImage.png",
        }
    ];

    const enemyKnightsArray = [
        {
            knightName: "Peasant Knight",
            knightHealth: 80,
            knightWeapon: "Club",
            knightLevel: 1,
            knightImage: "./assets/knightsAssets/peasantKnightImage.png",
        },
        {
            knightName: "Squire Knight",
            knightHealth: 90,
            knightWeapon: "Cutlass",
            knightLevel: 2,
            knightImage: "./assets/knightsAssets/squireKnightImage.png",
        },
        {
            knightName: "Enemy Infantry Knight",
            knightHealth: 100,
            knightWeapon: "Sword",
            knightLevel: 3,
            knightImage: "./assets/knightsAssets/enemyInfantryKnightImage.png",
        },
        {
            knightName: "Captain Knight",
            knightHealth: 150,
            knightWeapon: "Long Sword",
            knightLevel: 4,
            knightImage: "./assets/knightsAssets/captainKnightImage.png",
        },
        {
            knightName: "Viscount Knight",
            knightHealth: 200,
            knightWeapon: "Battle Axe",
            knightLevel: 5,
            knightImage: "./assets/knightsAssets/viscountKnightImage.png",
        },
        {
            knightName: "Duke Knight",
            knightHealth: 250,
            knightWeapon: "Great Sword",
            knightLevel: 6,
            knightImage: "./assets/knightsAssets/captainKnightImage.png",
        },
        {
            knightName: "Champion Knight",
            knightHealth: 300,
            knightWeapon: "Mace",
            knightLevel: 7,
            knightImage: "./assets/knightsAssets/championKnightImage.png",
        },
        {
            knightName: "King Knight",
            knightHealth: 400,
            knightWeapon: "War Hammer",
            knightLevel: 8,
            knightImage: "./assets/knightsAssets/kingKnightImage.png",
        },
        {
            knightName: "Templar Knight",
            knightHealth: 350,
            knightWeapon: "Dual Swords",
            knightLevel: 9,
            knightImage: "./assets/knightsAssets/templarKnightImage.png",
        },
    ];

    //Displays playable knights first once
    if (!hasPlayedOnce) {
        playableKnights();
        hasPlayedOnce = true;
    }

    playableKnightsButton.addEventListener("click", function () {
        playableKnights();
    });

    enemyKnightsButton.addEventListener("click", function () {
        enemyKnights();
    });

    backButton[2].addEventListener("click", function () {
        enemyKnightsMenu.style.display = "none";
        playableKnightsMenu.style.display = "flex";
        menu();
    });

    function playableKnights() {
        enemyKnightsMenu.style.display = "none";
        playableKnightsMenu.style.display = "flex";
        const playableKnightCard = document.querySelectorAll("#playableKnightsMenu .knightCard");
        const numberOfPages = document.getElementById("numberOfPages");
        const numOfPages = calcNumOfPages();
        const levelUnlockedText = document.getElementsByClassName("levelUnlockedText");
        const selectAKnightText = document.getElementById("selectAKnightText");
        const cardsPerPage = 3;
        const nextPageButton = nextPage[0];
        const previousPageButton = previousPage[0];
        let pageNum = 1;
        numberOfPages.innerHTML = `${pageNum} / ${numOfPages}`;

        hideAndShowButtons();
        function hideAndShowButtons() {
            nextPage[1].style.display = "none";
            previousPage[1].style.display = "none";
            nextPageButton.style.display = "flex";
            previousPageButton.style.display = "flex";
        }

        //displays if a Knight can be played or not
        lockedOrUnlockedKnights();
        function lockedOrUnlockedKnights() {
            let count = 0;
            for (let i = 0; i < playableKnightCard.length; i++) {
                if (count < knightsUnlocked) {
                    playableKnightCard[i].addEventListener("click", function () {
                        selectedKnight = knightsArray[i].knightName;
                    });
                    levelUnlockedText[i].innerText = `Unlocked: Level ${knightsArray[i].knightLevel}`;
                    count++;
                } else {
                    playableKnightCard[i].style.border = "none";
                    playableKnightCard[i].style.cursor = "default";
                    playableKnightCard[i].style.padding = "4px";
                    levelUnlockedText[i].innerText = `Locked: Level ${knightsArray[i].knightLevel}`;
                }
            }
        }
        
        function calcNumOfPages() {
            let numOfPages = playableKnightCard.length / 3;
            if ((playableKnightCard.length / 3) % 1 !== 0) {
                numOfPages += 1;
                numOfPages = Math.floor(numOfPages);
                return numOfPages;
            } else {
                numOfPages = Math.floor(numOfPages);
                return numOfPages;
            }
        }

        //show the first 3 cards
        showInitial();
        function showInitial() {
            selectAKnightText.style.display = "block";
            let count = 0;
            for (let i = 0; i < playableKnightCard.length; i++) {
                if (playableKnightCard[i] !== undefined) {
                    if (count < cardsPerPage) {
                        playableKnightCard[i].style.display = "flex";
                        count++;
                    } else {
                        playableKnightCard[i].style.display = "none";
                    }
                }
            }
        }

        //click on next page
        nextPageButton.addEventListener("click", function () {
            if (pageNum < numOfPages) {
                pageNum++;
                showPlayableCards();
                numberOfPages.innerHTML = `${pageNum} / ${numOfPages}`;
            }
        });

        //click on previous page
        previousPageButton.addEventListener("click", function () {
            if (pageNum > 1) {
                pageNum--;
                showPlayableCards();
                numberOfPages.innerHTML = `${pageNum} / ${numOfPages}`;
            }
        });

        //display the current page cards and hide the rest
        function showPlayableCards() {
            let cardsIndex = pageNum * cardsPerPage - (cardsPerPage);
            let endIndex = cardsIndex + cardsPerPage - 1;

            for (let i = 0; i < playableKnightCard.length; i++) {
                if (playableKnightCard[i] !== undefined) {
                    if (i >= cardsIndex && i <= endIndex) {
                        playableKnightCard[i].style.display = "flex";
                    } else {
                        playableKnightCard[i].style.display = "none";
                    }
                }
            }
        }
    }

    function enemyKnights() {
        playableKnightsMenu.style.display = "none";
        enemyKnightsMenu.style.display = "flex";
        const enemyKnightCard = document.querySelectorAll("#enemyKnightsMenu .knightCard");
        const numberOfPages = document.getElementById("numberOfPages");
        const numOfPages = calcNumOfPages();
        const cardsPerPage = 3;
        let pageNum = 1;
        const nextPageButton = nextPage[1];
        const previousPageButton = previousPage[1];
        numberOfPages.innerHTML = `${pageNum} / ${numOfPages}`;

        hideAndShowButtons();
        function hideAndShowButtons() {
            nextPage[0].style.display = "none";
            previousPage[0].style.display = "none";
            nextPageButton.style.display = "flex";
            previousPageButton.style.display = "flex";
        }

        function calcNumOfPages() {
            let numOfPages = enemyKnightCard.length / 3;
            if ((enemyKnightCard.length / 3) % 1 !== 0) {
                numOfPages += 1;
                numOfPages = Math.floor(numOfPages);
                return numOfPages;
            } else {
                numOfPages = Math.floor(numOfPages);
                return numOfPages;
            }
        }

        //show the first 3 cards and hide the rest
        showInitial();
        function showInitial() {
            selectAKnightText.style.display = "none";
            let count = 0;
            for (let i = 0; i < enemyKnightCard.length; i++) {
                if (enemyKnightCard[i] !== undefined) {
                    if (count < cardsPerPage) {
                        enemyKnightCard[count].style.display = "flex";
                        count++;
                    } else {
                        enemyKnightCard[i].style.display = "none";
                    }
                }
            }
        }

        //click on next page
        nextPageButton.addEventListener("click", function () {
            if (pageNum < numOfPages) {
                pageNum++;
                showEnemyCards();
                numberOfPages.innerHTML = `${pageNum} / ${numOfPages}`;
            }
        });

        //click on previous page
        previousPageButton.addEventListener("click", function () {
            if (pageNum > 1) {
                pageNum--;
                showEnemyCards();
                numberOfPages.innerHTML = `${pageNum} / ${numOfPages}`;
            }
        });

        function showEnemyCards() {
            let cardsIndex = pageNum * cardsPerPage - (cardsPerPage);
            let endIndex = cardsIndex + cardsPerPage - 1;

            for (let i = 0; i < enemyKnightCard.length; i++) {
                if (enemyKnightCard[i] !== undefined) {
                    if (i >= cardsIndex && i <= endIndex) {
                        enemyKnightCard[i].style.display = "flex";
                    } else {
                        enemyKnightCard[i].style.display = "none";
                    }
                }
            }
        }
    }

    return selectedKnight;
}

//Weapons Menu
function weaponsMenu() {
    weaponsContent.style.display = "grid";
    mainContent.style.display = "none";
    body.style.backgroundImage = "url(./assets/weaponsAssets/weaponsBackgroundImage.png)";

    backButton[3].addEventListener("click", function () {
        menu();
    });
}