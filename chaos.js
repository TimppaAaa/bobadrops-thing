const flimzyP = document.getElementById("flimzy-p");

setInterval(() => {
  flimzyP.style.left = `${window.innerWidth * Math.random()}px`;
  flimzyP.style.top = `${window.innerHeight * Math.random()}px`;
}, 500);