// 簡單直接的下拉選單控制
(function() {
  'use strict';
  
  function initDropdown() {
    var toggle = document.getElementById("dropdown-toggle");
    var menu = document.getElementById("dropdown-menu");

    if (!toggle || !menu) {
      console.error("Dropdown elements not found!");
      return;
    }

    // 點擊切換按鈕
    toggle.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // 切換 show class
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
      } else {
        menu.classList.add("show");
      }
    };

    // 點擊外部關閉選單
    document.onclick = function(e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("show");
      }
    };
  }

  // 確保 DOM 載入後執行
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDropdown);
  } else {
    initDropdown();
  }
})();
