// 設定轉場模式：fade / slide / zoom
let transitionType = "fade";

function showPhoto(photoElement, newSrc) {
  // 移除 active
  photoElement.classList.remove("active");

  setTimeout(() => {
    // 換圖片
    photoElement.src = newSrc;

    // 加回 active，觸發動畫
    photoElement.classList.add("active");
  }, 300);
}

// 初始化：套用 class
const photo = document.getElementById("gallery-photo");
photo.classList.add(`photo-${transitionType}`, "active");

// 範例：切換下一張
document.getElementById("next-btn").addEventListener("click", () => {
  showPhoto(photo, "../image/photo2.jpg");
});
