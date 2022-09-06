document.querySelectorAll(".btn-offer-mode-switch-inner").forEach(element => {
    element.addEventListener("click", (e) => {
        element.classList.toggle("activated");
    })
});
