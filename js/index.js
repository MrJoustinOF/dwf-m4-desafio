const main = () => {
  document.addEventListener("DOMContentLoaded", () => {
    // Montar todo en sus respectivos sitios
    const divNav = document.querySelector(".nav-here");
    navbar(divNav);

    const divFooter = document.querySelector(".footer-here");
    footer(divFooter);

    const divForm = document.querySelector(".form-here");
    if (divForm) {
      contactform(divForm);
    }

    //Primer Menu
    const btnMenu = document.querySelector(".navbar-btn");
    btnMenu.addEventListener("click", () => {
      const navbarRESP = document.querySelector(".navbar--responsive");
      navbarRESP.classList.toggle("showNav");
    });

    // Menu con la X
    const btnMenuRESP = document.querySelector(".navbar-btn--responsive");
    btnMenuRESP.addEventListener("click", () => {
      const navbarRESP = document.querySelector(".navbar--responsive");
      navbarRESP.classList.toggle("showNav");
    });

    //Montar servicios
    const servicesDiv = document.querySelector(".services-cards");
    if (servicesDiv) {
      services();
    }

    //Montar Portfolio
    const portfolioDiv = document.querySelector(".portfolio-cards");
    if (portfolioDiv) {
      portfolio();
    }

    //Mandar datos del formulario
    const form = document.querySelector("#contact");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          to: "ortizjoustin@gmail.com",
          message: "Prueba desde el proyecto/desafio",
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then((data) => {
          const mensaje = document.createElement("div");
          mensaje.innerHTML = `<h3 style="color: green;">Mensaje eniado correctamente</h3>`;
          form.appendChild(mensaje);
        })
        .catch((err) => {
          const mensaje = document.createElement("div");
          mensaje.innerHTML = `<h3 style="color: red;">Error al enviar mensaje</h3>`;
          form.appendChild(mensaje + err);
        });
    });
  });
};

main();
