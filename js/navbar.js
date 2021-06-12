const navbar = (el) => {
  //   const element = document.querySelector(el);
  const divComponent = document.createElement("div");
  divComponent.innerHTML = `<nav class="navbar">
  <h1><a href="./index.html" class="navbar-link">Joustin</a></h1>

  <ul class="navbar-ul">
    <li class="navbar-ul-li"><a href="./portfolio.html" class="navbar-link">Portfolio</a></li>
    <li class="navbar-ul-li"><a href="./servicios.html" class="navbar-link">Servicios</a></li>
    <li class="navbar-ul-li"><a href="./contacto.html" class="navbar-link">Contacto</a></li>
  </ul>

  <img src="img/btn-menu.png" alt="" class="navbar-btn" />
</nav>

<div class="navbar--responsive">
<img src="img/btn-x.png" alt="" class="navbar-btn--responsive" />
  <ul class="navbar-ul--responsive">
    <li class="navbar-ul-li--responsive"><a href="./portfolio.html" class="navbar-link">Portfolio</a></li>
    <li class="navbar-ul-li--responsive"><a href="./servicios.html" class="navbar-link">Servicios</a></li>
    <li class="navbar-ul-li--responsive"><a href="./contacto.html" class="navbar-link">Contacto</a></li>
  </ul>
  
</div>`;

  el.appendChild(divComponent);
};
