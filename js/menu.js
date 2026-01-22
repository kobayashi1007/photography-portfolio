// 下拉選單控制
(function() {
  'use strict';
  
  function initDropdown() {
    var toggle = document.getElementById("dropdown-toggle");
    var menu = document.getElementById("dropdown-menu");

    console.log("初始化下拉選單...", { toggle: toggle, menu: menu });

    if (!toggle || !menu) {
      console.error("找不到下拉選單元素！", { toggle: toggle, menu: menu });
      return;
    }

    console.log("下拉選單元素找到，綁定事件...");

    // 點擊切換按鈕
    toggle.addEventListener("click", function(e) {
      console.log("點擊了切換按鈕");
      e.preventDefault();
      e.stopPropagation();
      
      // 切換 show class
      var hasShow = menu.classList.contains("show");
      console.log("當前狀態:", hasShow ? "顯示" : "隱藏");
      
      if (hasShow) {
        menu.classList.remove("show");
        console.log("隱藏選單");
      } else {
        menu.classList.add("show");
        console.log("顯示選單");
      }
    }, false);

    // 點擊外部關閉選單
    document.addEventListener("click", function(e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        if (menu.classList.contains("show")) {
          menu.classList.remove("show");
          console.log("點擊外部，關閉選單");
        }
      }
    }, false);
  }

  // 確保 DOM 載入後執行
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDropdown);
  } else {
    // DOM 已經載入，直接執行
    setTimeout(initDropdown, 0);
  }
})();
