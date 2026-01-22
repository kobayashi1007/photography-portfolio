// 下拉選單控制：避免重複綁定，確保一次初始化
(function() {
  var initialized = false;

  function initDropdown() {
    if (initialized) return;
    initialized = true;

    var toggle = document.getElementById("dropdown-toggle");
    var menu = document.getElementById("dropdown-menu");

    if (!toggle || !menu) {
      console.error("找不到下拉選單元素！");
      return;
    }

    // 預設狀態
    menu.style.display = "none";
    toggle.setAttribute("aria-expanded", "false");

    function hideMenu() {
      menu.style.display = "none";
      menu.classList.remove("show");
      toggle.setAttribute("aria-expanded", "false");
    }

    function showMenu() {
      menu.style.display = "flex";
      menu.classList.add("show");
      toggle.setAttribute("aria-expanded", "true");
    }

    // 點擊切換按鈕
    toggle.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (menu.classList.contains("show")) {
        hideMenu();
      } else {
        showMenu();
      }
    }, true); // 捕獲階段，確保優先觸發

    // 點擊外部關閉選單
    document.addEventListener("click", function(e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        if (menu.classList.contains("show")) {
          hideMenu();
        }
      }
    });

    // 按下 Esc 關閉
    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && menu.classList.contains("show")) {
        hideMenu();
      }
    });
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    initDropdown();
  } else {
    document.addEventListener("DOMContentLoaded", initDropdown, { once: true });
  }
})();
