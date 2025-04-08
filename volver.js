document.addEventListener("DOMContentLoaded", () => {
    const btn = document.createElement("button");
    btn.textContent = "← Volver";
    btn.onclick = () => history.back();
    btn.className = "btn-volver";
  
    document.body.insertBefore(btn, document.body.firstChild);
  });