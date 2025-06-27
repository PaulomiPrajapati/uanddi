
let data = [];

fetch('components.json')
  .then(response => response.json())
  .then(json => {
    data = json;
    document.getElementById("searchInput").addEventListener("input", function () {
      const keyword = this.value.toLowerCase();
      const results = data.filter(item =>
        Object.values(item).some(value =>
          String(value).toLowerCase().includes(keyword)
        )
      );

      displayResults(results);
    });
  });

function displayResults(results) {
  const container = document.getElementById("results");
  container.innerHTML = "";
  results.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = Object.entries(item)
      .map(([key, val]) => `<strong>${key}:</strong> ${val}<br>`)
      .join('');
    container.appendChild(card);
  });
}
