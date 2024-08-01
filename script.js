const body = document.getElementById("body");
const mainContent = document.getElementById("mainContent");
const playContent = document.getElementById("playContent");
const guideContent = document.getElementById("guideContent");
const knightsContent = document.getElementById("knightsContent");
const weaponsContent = document.getElementById("weaponsContent");
const backButton = document.getElementsByClassName("backButton");
let selectedKnight = "Infantry Knight";
let selectedWeapon = "Sword";
let levelsUnlocked = 1;
let knightsUnlocked = 1;
let weaponsUnlocked = 1;

menu();

//Main Menu
function menu() {
    //display the Main Menu
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
    const knightsArray = knightsMenu();

    console.log(selectedKnight + ", " + selectedWeapon);

    for (let i = 0; i < levels.length; i++) {
        //unlocked levels are marked black
        if (i >= levelsUnlocked) {
            levels[i].style.color = "black";
            levels[i].style.cursor = "default";
            levels[i].style.padding = "0px";
            levels[i].style.fontSize = "25px";
        }

        levels[i].addEventListener("click", function () {
            levelSelected = i + 1;

            switch (levelSelected) {
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

    function levelOne() {

    };

    function levelTwo() {

    };

    function levelThree() {

    };

    function levelFour() {

    };

    function levelFive() {

    };

    function levelSix() {

    };

    function levelSeven() {

    };

    function levelEight() {

    };

    function levelNine() {

    };

    backButton[0].addEventListener("click", function () {
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
    const knightsArray = [];
    let hasPlayedOnce = false;

    const playableKnightsArray = [
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

    knightsArray.push(playableKnightsArray);

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

    knightsArray.push(enemyKnightsArray);

    //Displays playable knights first once
    if (!hasPlayedOnce) {
        playableKnights();
        hasPlayedOnce = true;
    }

    //show the playable knights
    playableKnightsButton.addEventListener("click", function () {
        playableKnights();
    });

    //show the enemy knights
    enemyKnightsButton.addEventListener("click", function () {
        enemyKnights();
    });

    function playableKnights() {
        enemyKnightsMenu.style.display = "none";
        playableKnightsMenu.style.display = "flex";
        const playableKnightCard = document.querySelectorAll("#playableKnightsMenu .knightCard");
        const numberOfPages = document.getElementsByClassName("numberOfPages");
        const numOfPages = calcNumOfPages();
        const levelUnlockedText = document.getElementsByClassName("levelUnlockedText");
        const selectAKnightText = document.getElementById("selectAKnightText");
        const cardsPerPage = 3;
        const nextPageButton = nextPage[0];
        const previousPageButton = previousPage[0];
        let pageNum = 1;
        numberOfPages[0].innerHTML = `${pageNum} / ${numOfPages}`;

        //hide and show the next and previous buttons
        hideAndShowButtons();
        function hideAndShowButtons() {
            nextPage[1].style.display = "none";
            previousPage[1].style.display = "none";
            nextPageButton.style.display = "flex";
            previousPageButton.style.display = "flex";
        }

        //displays if a knight is unlocked or locked
        lockedOrUnlockedKnights();
        function lockedOrUnlockedKnights() {
            let count = knightsUnlocked;

            for (let i = 0; i < playableKnightCard.length; i++) {
                //locked knights
                if (count < playableKnightCard.length) {
                    playableKnightCard[count].style.border = "none";
                    playableKnightCard[count].style.cursor = "default";
                    playableKnightCard[count].style.padding = "4px";
                    levelUnlockedText[count].innerText = "Locked";
                    count++;
                } 

                //unlocked knights
                if(i < count){
                    playableKnightCard[i].addEventListener("click", function(){
                        selectedKnight = playableKnightsArray[i].knightName;
                    });
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
                if (count < cardsPerPage) {
                    playableKnightCard[i].style.display = "flex";
                    count++;
                } else {
                    playableKnightCard[i].style.display = "none";
                }
            }
        }

        //display the current page cards and hide the rest
        function showPlayableCards() {
            let cardsIndex = pageNum * cardsPerPage - (cardsPerPage);
            let endIndex = cardsIndex + cardsPerPage - 1;

            for (let i = 0; i < playableKnightCard.length; i++) {
                if (i >= cardsIndex && i <= endIndex) {
                    playableKnightCard[i].style.display = "flex";
                } else {
                    playableKnightCard[i].style.display = "none";
                }
            }
        }

        //click on next page
        nextPageButton.addEventListener("click", function () {
            if (pageNum < numOfPages) {
                pageNum++;
                showPlayableCards();
                numberOfPages[0].innerHTML = `${pageNum} / ${numOfPages}`;
            }
        });

        //click on previous page
        previousPageButton.addEventListener("click", function () {
            if (pageNum > 1) {
                pageNum--;
                showPlayableCards();
                numberOfPages[0].innerHTML = `${pageNum} / ${numOfPages}`;
            }
        });

    }

    function enemyKnights() {
        playableKnightsMenu.style.display = "none";
        enemyKnightsMenu.style.display = "flex";
        const enemyKnightCard = document.querySelectorAll("#enemyKnightsMenu .knightCard");
        const numberOfPages = document.getElementsByClassName("numberOfPages");
        const numOfPages = calcNumOfPages();
        const cardsPerPage = 3;
        let pageNum = 1;
        const nextPageButton = nextPage[1];
        const previousPageButton = previousPage[1];
        numberOfPages[0].innerHTML = `${pageNum} / ${numOfPages}`;

        //show and hide the next and previous buttons
        hideAndShowButtons();
        function hideAndShowButtons() {
            nextPage[0].style.display = "none";
            previousPage[0].style.display = "none";
            nextPageButton.style.display = "flex";
            previousPageButton.style.display = "flex";
        }

        //calculate number of pages needed to show the cards
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
                if (count < cardsPerPage) {
                    enemyKnightCard[count].style.display = "flex";
                    count++;
                } else {
                    enemyKnightCard[i].style.display = "none";
                }
            }
        }

        //show the enemy knights
        function showEnemyCards() {
            let cardsIndex = pageNum * cardsPerPage - (cardsPerPage);
            let endIndex = cardsIndex + cardsPerPage - 1;

            for (let i = 0; i < enemyKnightCard.length; i++) {
                if (i >= cardsIndex && i <= endIndex) {
                    enemyKnightCard[i].style.display = "flex";
                } else {
                    enemyKnightCard[i].style.display = "none";
                }
            }
        }

        //click on next page
        nextPageButton.addEventListener("click", function () {
            if (pageNum < numOfPages) {
                pageNum++;
                showEnemyCards();
                numberOfPages[0].innerHTML = `${pageNum} / ${numOfPages}`;
            }
        });

        //click on previous page
        previousPageButton.addEventListener("click", function () {
            if (pageNum > 1) {
                pageNum--;
                showEnemyCards();
                numberOfPages[0].innerHTML = `${pageNum} / ${numOfPages}`;
            }
        });

    }

    //return to main menu
    backButton[2].addEventListener("click", function () {
        enemyKnightsMenu.style.display = "none";
        playableKnightsMenu.style.display = "flex";
        menu();
    });

    return knightsArray;
}

//Weapons Menu
function weaponsMenu() {
    weaponsContent.style.display = "grid";
    mainContent.style.display = "none";
    body.style.backgroundImage = "url(./assets/weaponsAssets/weaponsBackgroundImage.png)";
    const weaponClass = document.getElementsByClassName("weapon");
    const numberOfPages = document.getElementsByClassName("numberOfPages");
    const previousPage = document.getElementsByClassName("previousPage");
    const nextPage = document.getElementsByClassName("nextPage");
    const weaponUnlockedText = document.getElementsByClassName("weaponUnlockedText");
    const previousPageButton = previousPage[2];
    const nextPageButton = nextPage[2];
    let pageNum = 1;
    const weaponsPerPage = 3;
    const numOfPages = calcNumOfPages();
    let hasPlayedOnce = false;
    numberOfPages[1].innerHTML = `${pageNum} / ${numOfPages}`;

    const weapons = [
        {
            weaponName: "Sword",
            weaponDamage: 20,
            weaponParry: 20,
            weaponLevel: 3,
        },
        {
            weaponName: "Long Sword",
            weaponDamage: 25,
            weaponParry: 40,
            weaponLevel: 5,
        },
        {
            weaponName: "Battle Axe",
            weaponDamage: 30,
            weaponParry: 0,
            weaponLevel: 7,
        },
        {
            weaponName: "Great Sword",
            weaponDamage: 35,
            weaponParry: 60,
            weaponLevel: 9,
        }
    ];

    //display if a weapon is locked or unlocked
    lockedOrUnlockedWeapons();
    function lockedOrUnlockedWeapons(){
        let count = weaponsUnlocked;
        for(let i = 0; i < weaponClass.length; i++){
            //locked weapons
            if(count < weaponClass.length){
                weaponClass[count].style.border = "none";
                weaponClass[count].style.padding = "0px";
                weaponClass[count].style.cursor = "default";
                weaponUnlockedText[count].innerHTML = "Locked";
                count++;
            } 

            //unlocked weapons
            if(i < weaponsUnlocked){
                weaponClass[i].addEventListener("click", function(){
                    selectedWeapon = weapons[i].weaponName;
                });
            }
        }
    }

    //calculate the number of pages needed to show the weapons
    function calcNumOfPages() {
        let pages = weaponClass.length / weaponsPerPage;
        if (pages % 1 !== 0) {
            pages += 1;
            return Math.floor(pages);
        } else {
            return Math.floor(pages);
        }
    };

    //show the first 3 weapons
    showInitial();
    function showInitial() {
        let count = 0;
        if (!hasPlayedOnce) {
            for (let i = 0; i < weaponClass.length; i++) {
                if (count < weaponsPerPage) {
                    weaponClass[count].style.display = "flex";
                    count++;
                } else {
                    weaponClass[i].style.display = "none";
                }

            }
            hasPlayedOnce = true;
        }
    };

    //show the weapons
    function showWeaponCards() {
        let cardsIndex = (pageNum * weaponsPerPage) - weaponsPerPage;
        let endIndex = (cardsIndex + weaponsPerPage) - 1;

        for (let i = 0; i < weaponClass.length; i++) {
            if (i >= cardsIndex && i <= endIndex) {
                weaponClass[i].style.display = "flex";
            } else {
                weaponClass[i].style.display = "none";
            }
        }
    };

    //show the previous page cards
    previousPageButton.addEventListener("click", function () {
        if (pageNum > 1) {
            pageNum--;
            showWeaponCards();
            numberOfPages[1].innerHTML = `${pageNum} / ${numOfPages}`;
        }
    });

    //show the next page cards
    nextPageButton.addEventListener("click", function () {
        if (pageNum < numOfPages) {
            pageNum++;
            showWeaponCards();
            numberOfPages[1].innerHTML = `${pageNum} / ${numOfPages}`;
        }
    });

    //return to main menu
    backButton[3].addEventListener("click", function () {
        menu();
    });
}