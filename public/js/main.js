document.getElementById("search-btn").addEventListener("click", async () => {
  const query = document.getElementById("search-input").value.trim();
  if (!query) {
    alert("Please enter a search term");
    return;
  }

  try {
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const results = await response.json();

    const resultsSection = document.getElementById("results-section");
    if (results.length === 0) {
      resultsSection.innerHTML = "<p>No products found.</p>";
      return;
    }

    resultsSection.innerHTML = results
      .map(
        (p) => `
        <div class="product">
          <h3>${p.name}</h3>
          <p>Seller: ${p.seller}</p>
          <p>Contact: ${p.contact}</p>
          <p>Location: ${p.location}</p>
        </div>
      `
      )
      .join("");
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
});
