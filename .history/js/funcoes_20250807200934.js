document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");

            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
                this.innerHTML = this.innerHTML.replace("-", "+");
            } else {
                panel.style.display = "block";
                this.innerHTML = this.innerHTML.replace("+", "-");
            }
        });
    });
});
