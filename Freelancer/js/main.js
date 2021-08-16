$(".nav-btn").on("click", (e) => {
    e.preventDefault();
    $(".navigation").toggleClass("menu-active");
});