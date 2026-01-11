document.addEventListener('DOMContentLoaded', () => {
    // ScrollSpy Logic
    const menuLinks = document.querySelectorAll('.menu-link');
    const sections = document.querySelectorAll('.scroll-section');

    function onScroll() {
        let currentSectionId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 200)) {
                currentSectionId = section.getAttribute('id');
            }
        });
        if (window.scrollY < 100) {
            currentSectionId = "experiences";
        }
        menuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', onScroll);
    onScroll();

    // Logic for Expanding Research Paper
    const paperToggle = document.getElementById('research-paper-toggle');
    if (paperToggle) {
        paperToggle.addEventListener('click', (e) => {
            if (e.target.closest('.btn-download')) return;
            paperToggle.classList.toggle('open');
        });
    }

    // Logic for Expanding Experience Jobs
    const jobToggles = document.querySelectorAll('.expandable-job .job-header-row');
    jobToggles.forEach(header => {
        header.addEventListener('click', (e) => {
            if (e.target.closest('a')) return;
            const jobEntry = header.parentElement;
            jobEntry.classList.toggle('open');
        });
    });
});
