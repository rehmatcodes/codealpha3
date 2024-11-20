const sections = document.querySelectorAll('.section');
const secbtns = document.querySelectorAll('.controls .control');
const allsections = document.querySelector('.main-content'); // Select the first element

function pagetransitions() {
    // Button Click Active Class
    secbtns.forEach(btn => {
        btn.addEventListener('click', function () {
            let currbtn = document.querySelector('.active-btn');
            if (currbtn) {
                currbtn.classList.remove('active-btn');
            }
            this.classList.add('active-btn');

            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));

            // Show the section that corresponds to the clicked button
            const sectionId = this.getAttribute('data-id');
            const targetSection = document.querySelector(`#${sectionId}`); // Use ID selector
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Toggle theme
    const themeBtn = document.querySelector('.theme-btn'); // Ensure the class name matches
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light');
    });

    // Section active class 
    allsections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // Remove selected from the button
            secbtns.forEach((btn) => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            // Hide other sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the section corresponding to the clicked button
            const element = document.querySelector(`#${id}`); // Use ID selector
            if (element) {
                element.classList.add('active');
            }
        }
    });
}

pagetransitions();
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();