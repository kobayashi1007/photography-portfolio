document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dropdown-toggle");
  const menu = document.getElementById("dropdown-menu");

  // 檢查元素是否存在
  if (!toggle || !menu) {
    console.error("Navbar elements not found:", { toggle, menu });
    return;
  }

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation(); // 防止事件冒泡
    menu.classList.toggle("show"); // 切換 show class
  });

  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("show"); // 收合
    }
  });
});
