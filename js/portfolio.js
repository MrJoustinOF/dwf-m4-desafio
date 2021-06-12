const portfolio = () => {
  let contentful = fetch(
    "https://cdn.contentful.com/spaces/nsctbkv2kthj/environments/master/entries?access_token=PniuBD1vQyeTpoP6i1NhuVNgKwNgL2AUPMbkAtQAlvs"
  );
  contentful
    .then((x) => x.json())
    .then((json) => json.items.map((x) => x.fields))
    .then((json) =>
      json.map((project) => {
        if (project.url) {
          const projectElement = document.createElement("div");
          projectElement.innerHTML = `<div class="portfolio-card">
              <img src="img/portfolio-img.png" alt="" />
              <h2 class="portfolio-card__h2">${project.title}</h2>
              <p class="portfolio-card__p">
                ${project.description}
              </p>
              <p class="portfolio-card__link">
                ${project.url}
              </p>
            </div>`;

          const portfolioDiv = document.querySelector(".portfolio-cards");
          portfolioDiv.appendChild(projectElement);
        }
      })
    );
};
