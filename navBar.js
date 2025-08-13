let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Stop hash from updating URL
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

window.addEventListener("load", () => {
  const targetId = sessionStorage.getItem("scrollTarget");
  if (targetId) {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    sessionStorage.removeItem("scrollTarget"); // clean up
  }
});
