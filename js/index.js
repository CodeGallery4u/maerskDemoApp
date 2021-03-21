document.getElementById("shuffleBtn").addEventListener("click", shuffle);
document.getElementById("sortBtn").addEventListener("click", sort);

//HTML cards
let container = document.querySelector("#container");
let header = document.querySelector("#header");
let btnGroup = document.querySelector("#btnGroup");
let card1 = document.querySelector("#card1");
let card2 = document.querySelector("#card2");
let card3 = document.querySelector("#card3");
let card4 = document.querySelector("#card4");
let card5 = document.querySelector("#card5");
let card6 = document.querySelector("#card6");
let card7 = document.querySelector("#card7");
let card8 = document.querySelector("#card8");
let card9 = document.querySelector("#card9");
let footer = document.querySelector("#footer");

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mq = window.matchMedia("(max-width: 375px)");

window.onload = function () {
  if (matchMedia) {
    mq.addListener(WidthChange);
    WidthChange(mq);
  }
};
function shuffle() {
  let deviceMediaQueryType = mq.matches ? "mobile" : "desktop";
  ShufflePosition(deviceMediaQueryType);
}

function sort() {
  let deviceMediaQueryType = mq.matches ? "mobile" : "desktop";
  SortPositions(deviceMediaQueryType);
}
//ApplyStyles
ApplyStyles = (deviceMediaQueryType) => {
  let sortedArray = [...numArray].sort();
  let colorCodes = [
    "#6f98a8",
    "#2b8ead",
    "#333333",
    "#2b8ead",
    "#333333",
    "#bfbfbf",
    "#bfbfbf",
    "#6f98a8",
    "#333333",
  ];
  sortedArray.forEach((element, i) => {
    let pos = parseInt(i) + 1;
    let positionID = `#card${pos}`;
    let cardRefence = document.querySelector(positionID);
    if (deviceMediaQueryType === "desktop") {
      cardRefence.style.removeProperty("borderLeft");
      cardRefence.style.background = colorCodes[i];
    } else {
      cardRefence.style.removeProperty("background");
      cardRefence.style.borderLeft = `${colorCodes[i]} 10px solid`;
    }
  });
};
// Apply Positions to every element

ApplyPositions = (deviceMediaQueryType) => {
  numArray.forEach((element, i) => {
    let pos = parseInt(i) + 1;
    let positionID = `#card${pos}`;
    let cardRefence = document.querySelector(positionID);
    cardRefence.classList.value = "";
    cardRefence.classList.add(
      `position${element}-${deviceMediaQueryType}`,
      `grid-items-${deviceMediaQueryType}`
    );
  });
};

// Shuffle Positions

ShufflePosition = (deviceMediaQueryType) => {
  console.log("Shuffle Positions");
  console.log("Original Array", numArray);
  console.log("Shuffle Array", numArray.reverse());

  for (var i = 0; i < numArray.length; i++) {
    var randomIndex = Math.floor(Math.random() * numArray.length);

    // swapping indexes values
    temp = numArray[i];
    numArray[i] = numArray[randomIndex];
    numArray[randomIndex] = temp;
  }
  ApplyPositions(deviceMediaQueryType);
};

// Sort Positions
SortPositions = (deviceMediaQueryType) => {
  console.log("Sort positions");
  console.log("Original Array", numArray.sort());
  ApplyPositions(deviceMediaQueryType);
};

// media query change
function WidthChange(mq) {
  let deviceMediaQueryType = mq.matches ? "mobile" : "desktop";

  switch (deviceMediaQueryType) {
    case "desktop":
      container.classList.remove(`container-mobile`);
      btnGroup.classList.remove(`btnGroup-mobile`);
      header.classList.remove(`header-mobile`);
      footer.classList.remove(`footer-mobile`);

      container.classList.add(`container-desktop`);
      btnGroup.classList.add(`btnGroup-desktop`);
      header.classList.add(`header-desktop`);
      footer.classList.add(`footer-desktop`);
      break;

    case "mobile":
      container.classList.remove(`container-desktop`);
      btnGroup.classList.remove(`btnGroup-desktop`);
      header.classList.remove(`header-desktop`);
      footer.classList.remove(`footer-desktop`);

      container.classList.add(`container-mobile`);
      btnGroup.classList.add(`btnGroup-mobile`);
      header.classList.add(`header-mobile`);
      footer.classList.add(`footer-mobile`);

      break;
  }

  console.log(deviceMediaQueryType);
  ApplyStyles(deviceMediaQueryType);
  ApplyPositions(deviceMediaQueryType);
}
