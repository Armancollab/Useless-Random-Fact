document.getElementById("factButton").addEventListener("click", function () {
  fetch("https://uselessfacts.jsph.pl/random.json?language=en", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("factDisplay").innerText = data.text;
    });
});
