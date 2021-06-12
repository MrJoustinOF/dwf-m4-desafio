const footer = (el) => {
  const divComponent = document.createElement("div");
  divComponent.innerHTML = `<footer>
    <div class="footer">
      <h2 class="footer-title">Joustin</h2>

      <div class="footer-links">
        <ul>
          <li class="footer-ul__li">
            Instagram<img
              src="img/ig-logo.png"
              alt=""
              class="footer-ul__li__img"
            />
          </li>

          <li class="footer-ul__li">
            LinkedIn<img
              src="img/linkedin-logo.png"
              alt=""
              class="footer-ul__li__img"
            />
          </li>

          <li class="footer-ul__li">
            GitHub<img
              src="img/gh-logo.png"
              alt=""
              class="footer-ul__li__img"
            />
          </li>
        </ul>
      </div>
    </div>
  </footer>`;

  el.appendChild(divComponent);
};
