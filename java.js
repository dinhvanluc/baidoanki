const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navmenu");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navmenu.classList.toggle("open");
}
function applyFilters() {
    let category = document.getElementById("categoryFilter").value;
    let price = document.getElementById("priceFilter").value;
    let rating = document.getElementById("ratingFilter").value;

    let products = document.querySelectorAll(".row");

    products.forEach(product => {
        let productCategory = product.getAttribute("data-category");
        let productPrice = parseInt(product.getAttribute("data-price"));
        let productRating = parseInt(product.getAttribute("data-rating"));

        let categoryMatch = category === "all" || productCategory === category;
        let priceMatch = price === "all" ||
            (price === "low" && productPrice < 50) ||
            (price === "medium" && productPrice >= 50 && productPrice <= 150) ||
            (price === "high" && productPrice > 150);
        let ratingMatch = rating === "all" || productRating >= parseInt(rating);

        if (categoryMatch && priceMatch && ratingMatch) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");
SmallImg[0].onclick = function () {
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function () {
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function () {
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function () {
    ProductImg.src = SmallImg[3].src;
}
SmallImg[4].onclick = function () {
    ProductImg.src = SmallImg[4].src;
}