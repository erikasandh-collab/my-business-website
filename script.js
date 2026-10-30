const Btn = document.getElementById("Btn")

Btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "Ljust tema";
    } else {
        themeBtn.textContent = "Mörkt tema";
    }
});