document.querySelector(".open-btn").addEventListener("click", function () {
    document.querySelector(".mini-cart").classList.add("active");
});

document.querySelector(".close-btn").addEventListener("click", function () {
    document.querySelector(".mini-cart").classList.remove("active");
});