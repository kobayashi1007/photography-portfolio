// 下拉選單控制 - 使用最簡單可靠的方法
(function() {
  function initDropdown() {
    var toggle = document.getElementById("dropdown-toggle");
    var menu = document.getElementById("dropdown-menu");

    if (!toggle || !menu) {
      console.error("找不到下拉選單元素！");
      return;
    }

    // 點擊切換按鈕
    toggle.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // 直接切換 display 樣式和 class
      if (menu.style.display === "flex" || menu.classList.contains("show")) {
        menu.style.display = "none";
        menu.classList.remove("show");
      } else {
        menu.style.display = "flex";
        menu.classList.add("show");
      }
    }, true); // 使用捕獲階段，確保優先執行

    // 點擊外部關閉選單
    document.addEventListener("click", function(e) {
      if (menu && toggle) {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
          if (menu.classList.contains("show")) {
            menu.style.display = "none";
            menu.classList.remove("show");
          }
        }
      }
    }, false);
  }

  // 確保在 DOM 完全載入後執行
  if (document.readyState === "complete") {
    initDropdown();
  } else {
    window.addEventListener("load", initDropdown);
    document.addEventListener("DOMContentLoaded", initDropdown);
  }
})();
