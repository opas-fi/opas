document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-details");
  const detailsDiv = document.querySelector(".about-details");

  toggleBtn.addEventListener("click", () => {
    const isHidden = detailsDiv.style.display === "none" || detailsDiv.style.display === "";

    if (isHidden) {
      detailsDiv.style.display = "block";
      toggleBtn.textContent = "Show less";
    } else {
      detailsDiv.style.display = "none";
      toggleBtn.textContent = "Show more";
    }
  });
});
