// 等待 DOM 載入完成
(function() {
  function initDropdown() {
    const toggle = document.getElementById("dropdown-toggle");
    const menu = document.getElementById("dropdown-menu");

    // 檢查元素是否存在
    if (!toggle) {
      console.error("Dropdown toggle not found!");
      return;
    }
    if (!menu) {
      console.error("Dropdown menu not found!");
      return;
    }

    console.log("Dropdown menu initialized", { toggle, menu });

    // 點擊切換按鈕時顯示/隱藏選單
    toggle.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("Toggle clicked, current state:", menu.classList.contains("show"));
      
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        console.log("Menu hidden");
      } else {
        menu.classList.add("show");
        console.log("Menu shown");
      }
    });

    // 點擊選單外部時關閉選單
    document.addEventListener("click", function(e) {
      // 如果點擊的不是選單或切換按鈕，且選單是打開的，則關閉
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        if (menu.classList.contains("show")) {
          menu.classList.remove("show");
          console.log("Menu closed by outside click");
        }
      }
    });

    // 防止選單內的點擊事件冒泡
    menu.addEventListener("click", function(e) {
      e.stopPropagation();
    });
  }

  // 如果 DOM 已經載入，直接執行；否則等待 DOMContentLoaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDropdown);
  } else {
    initDropdown();
  }
})();
