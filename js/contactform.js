const contactform = (el) => {
  const divComponent = document.createElement("div");
  divComponent.innerHTML = `<div class="contact" id="contact">
    <h2 class="title">Escribime</h2>
    <form class="contact-form" method="POST">
      <label for="name" class="contact-form__label">Nombre</label>
      <input type="text" name="name" class="contact-form__input" />

      <label for="mail" class="contact-form__label">Email</label>
      <input type="text" name="mail" class="contact-form__input" />

      <label for="message" class="contactForm-form__label">Mensaje</label>
      <textarea
        name="message"
        id=""
        cols="30"
        rows="10"
        class="contact-form__textarea"
      ></textarea>

      <input
        type="submit"
        value="Enviar"
        class="btnSubmit contact-form__input"
      />
    </form>
  </div>`;
  el.appendChild(divComponent);
};
