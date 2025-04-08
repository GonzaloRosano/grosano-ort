document.addEventListener("DOMContentLoaded", () => {
  const headerHTML = `
      <header>
        <a href="/">
          <figure>
            <img src="/img/logo.webp" alt="Logo">
            <figcaption>Gonzalo Rosano</figcaption>
          </figure>
        </a>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/programacion">Programación</a></li>
            <li><a href="/diw">Diseño de interfaz web</a></li>
          </ul>
        </nav>
      </header>
    `;

  const container = document.createElement("div");
  container.innerHTML = headerHTML;

  const main = document.body;
  const firstElement = main.querySelector("h1, h2, main, section");
  main.insertBefore(container, firstElement || main.firstChild);
});
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
});
