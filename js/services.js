const services = () => {
  let contentful = fetch(
    "https://cdn.contentful.com/spaces/nsctbkv2kthj/environments/master/entries?access_token=PniuBD1vQyeTpoP6i1NhuVNgKwNgL2AUPMbkAtQAlvs"
  );
  contentful
    .then((x) => x.json())
    .then((json) => json.items.map((x) => x.fields))
    .then((json) =>
      json.map((service) => {
        if (!service.url) {
          const serviceElement = document.createElement("div");
          serviceElement.innerHTML = `<div class="service-card">
        <img src="img/pc.png" alt="" />
        <h2>${service.title}</h2>
        <p class="service-card__p">
          ${service.description}
        </p>
      </div>`;

          const servicesDiv = document.querySelector(".services-cards");
          servicesDiv.appendChild(serviceElement);
        }
      })
    );
};
