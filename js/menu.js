document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dropdown-toggle");
  const menu = document.getElementById("dropdown-menu");

  // 檢查元素是否存在
  if (!toggle || !menu) {
    console.error("Navbar elements not found:", { toggle, menu });
    return;
  }

  // 點擊切換按鈕時顯示/隱藏選單
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation(); // 防止事件冒泡
    const isShowing = menu.classList.contains("show");
    if (isShowing) {
      menu.classList.remove("show");
    } else {
      menu.classList.add("show");
    }
  });

  // 點擊選單外部時關閉選單
  document.addEventListener("click", (e) => {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnToggle = toggle.contains(e.target);
    
    if (!isClickInsideMenu && !isClickOnToggle && menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  });

  // 防止選單內的連結點擊時關閉選單（可選，如果需要點擊後關閉可以移除）
  menu.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
