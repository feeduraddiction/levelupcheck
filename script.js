const starting = 1000;
const q = 1.05;
const n = 100;
let currentExp = 0;
let currentLvl = 1;
let roundsCount = 0;
const experienceByRound = 250;
const expProgress = document.getElementById("expProgress");
const summ = (starting * (Math.pow(q, n) - 1)) / (q - 1);
console.log(summ);

for (let i = 1; i < 100; i++) {
  const totalExpAtCurrentLvl = starting * Math.pow(q, i);
  if (i !== 0) {
    const exptToNextLvl = totalExpAtCurrentLvl - starting * Math.pow(q, i - 1);
    console.log(`${i} ${exptToNextLvl} ${i + 1}`);
    console.log(totalExpAtCurrentLvl);
  }
}

const getCurrentLvlExpPercent = (lvl) => {
  return (
    (currentExp - (starting * Math.pow(q, lvl - 1) - starting)) /
    (starting * Math.pow(q, lvl) - starting * Math.pow(q, lvl - 1))
  );
};

function playRound() {
  roundsCount++;
  document.querySelector("#played").innerHTML = roundsCount;

  currentExp = currentExp + experienceByRound;

  const totalExpAtCurrentLvl = (lvl) => starting * Math.pow(q, lvl);
  document.querySelector("#exp").innerHTML = currentExp;

  if (currentExp > totalExpAtCurrentLvl(currentLvl) - starting) {
    while (currentExp > totalExpAtCurrentLvl(currentLvl) - starting) {
      currentLvl++;
      document.querySelector("#lvl").innerHTML = currentLvl;
    }
  }

  const exptToNextLvl =
    starting * Math.pow(q, currentLvl) - starting * Math.pow(q, currentLvl - 1);
  document.querySelector("#expToNext").innerHTML = exptToNextLvl;
  expProgress.style.width =
    Math.round(getCurrentLvlExpPercent(currentLvl) * 100) + "%";
  document.querySelector("#percent").innerHTML =
    Math.round(getCurrentLvlExpPercent(currentLvl) * 100) + "%";
}

const updateLevel = () => {};
