document.getElementById("searchBtn").addEventListener("click", async () => {
  const keyword = document.getElementById("keyword").value;
  const resultsDiv = document.getElementById("results");

  if (!keyword) {
    alert("Please enter a keyword.");
    return;
  }

  resultsDiv.innerHTML = "Loading...";

  try {
    const res = await fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`);
    const data = await res.json();

    resultsDiv.innerHTML = data.map(product => `
      <div class="product">
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>Rating: ${product.rating}</p>
        <p>Reviews: ${product.reviews}</p>
      </div>
    `).join("");
  } catch (err) {
    resultsDiv.innerHTML = `<p style="color:red">Error: ${err.message}</p>`;
  }
});