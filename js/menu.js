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
    toggle.setAttribute("aria-controls", "dropdown-menu");

    function logState(action) {
      if (typeof console !== "undefined" && console.log) {
        console.log("[dropdown]", action, {
          expanded: toggle.getAttribute("aria-expanded"),
          display: menu.style.display,
          hasShow: menu.classList.contains("show")
        });
      }
    }

    function hideMenu() {
      menu.style.display = "none";
      menu.classList.remove("show");
      toggle.setAttribute("aria-expanded", "false");
      logState("hide");
    }

    function showMenu() {
      menu.style.setProperty("display", "flex", "important");
      menu.classList.add("show");
      toggle.setAttribute("aria-expanded", "true");
      logState("show");
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

    // 鍵盤操作（Enter / Space）
    toggle.addEventListener("keydown", function(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (menu.classList.contains("show")) {
          hideMenu();
        } else {
          showMenu();
        }
      }
    });

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
