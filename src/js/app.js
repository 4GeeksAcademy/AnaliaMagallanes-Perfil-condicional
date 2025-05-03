import "../style/index.css";

function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  // 1. Generar la portada (cover)
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover === false) cover = "<div class='cover'></div>";

  // 2. Obtener los valores dinámicos con fallback (en caso de que estén vacíos)
  const name = variables.name || "Name";
  const lastName = variables.lastName || "Last Name";
  const role = variables.role || "Your Role";
  const city = variables.city || "City";
  const country = variables.country || "Country";
  const avatar = variables.avatarURL || "https://via.placeholder.com/100";

  // 3. Posición de redes sociales
  const socialPosition = variables.socialMediaPosition || "position-right";

  // 4. Links sociales solo si están definidos
  const socialLinks = {
    twitter: variables.twitter
      ? `<li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>`
      : "",
    github: variables.github
      ? `<li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>`
      : "",
    linkedin: variables.linkedin
      ? `<li><a href="https://linkedin.com/in/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>`
      : "",
    instagram: variables.instagram
      ? `<li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>`
      : ""
  };

  // 5. Generar el HTML final
  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${avatar}" class="photo" />
      <h1>${name} ${lastName}</h1>
      <h2>${role}</h2>
      <h3>${city}, ${country}</h3>
      <ul class="${socialPosition}">
        ${socialLinks.twitter}
        ${socialLinks.github}
        ${socialLinks.linkedin}
        ${socialLinks.instagram}
      </ul>
    </div>
  `;
}

