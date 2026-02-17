const cards = document.querySelectorAll(".price-card");
const packageInput = document.getElementById("packageInput");
const selectedText = document.getElementById("selectedText");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");

    const selectedPackage = card.getAttribute("data-package");

    packageInput.value = selectedPackage;
    selectedText.innerText = "الباقة المختارة: " + selectedPackage;

    document.getElementById("booking").scrollIntoView({
      behavior: "smooth",
    });
  });
});
