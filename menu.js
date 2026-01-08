document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dropdown-toggle");
  const menu = document.getElementById("dropdown-menu");

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("show"); // 切換 show class
  });

  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("show"); // 收合
    }
  });
});
