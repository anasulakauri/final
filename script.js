let navigationBlock = document.getElementById('navBar')
let burgerBlock = document.getElementById('burgerBar')

burgerBlock.addEventListener("click", function() {
    navigationBlock.classList.add("active");
})
