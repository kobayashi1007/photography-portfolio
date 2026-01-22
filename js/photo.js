document.addEventListener("DOMContentLoaded", () => {
  const photo = document.getElementById("gallery-photo");
  const title = document.getElementById("gallery-title");
  const desc = document.getElementById("gallery-desc");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const link = document.getElementById("gallery-link"); // 包住圖片的 <a>

  // 照片與文字資料
  const gallery = [
    {
      img: "../image/photo1.jpg",
      title: "風景攝影",
      desc: "風景攝影是一門結合技術與藝術的創作，它透過鏡頭捕捉自然的壯麗與細膩。山巒的層次、湖泊的倒影、天空的變幻，都能在光影交錯中展現獨特的美感。攝影師不僅要掌握構圖與曝光，更要用心體會大自然的氛圍，將瞬間化為永恆。風景攝影的魅力在於，它能讓觀者透過照片感受寧靜、壯闊與生命力，彷彿置身其中，與自然對話。",
      link: "viewphoto.html"
    },
    {
      img: "../image/photo2.jpg",
      title: "人像攝影",
      desc: "人像攝影是一門展現人物神韻與情感的藝術。透過光線的運用與構圖的安排，攝影師能捕捉眼神的深邃、笑容的真摯，甚至是細微的表情變化。背景與氛圍的選擇同樣重要，它能襯托人物的特質，讓照片更具故事性。人像攝影不僅是技術的展現，更是與被攝者交流的過程，透過鏡頭建立信任，呈現最自然的一面。這種影像能跨越語言，傳遞情感與人格魅力。",
      link: "peoplephoto.html"
    },
    {
      img: "../image/photo3.jpg",
      title: "街拍攝影",
      desc: "街拍攝影是一種在城市日常中捕捉瞬間的藝術。它強調真實與即興，透過鏡頭展現人群的互動、街道的氛圍以及生活的細節。攝影師需要敏銳的觀察力，隨時捕捉光影、表情與動態，讓平凡場景化為有故事性的影像。街拍不僅記錄城市的脈動，也反映文化與社會的多樣性，讓觀者透過照片感受街頭的活力與人情味。",
      link: "streetphoto.html"
    }
  ];

  let current = 0;

  function showItem(index) {
    // 先淡出
    photo.style.opacity = 0;
    title.style.opacity = 0;
    desc.style.opacity = 0;

    setTimeout(() => {
      // 更新內容
      photo.src = gallery[index].img;
      title.textContent = gallery[index].title;
      desc.textContent = gallery[index].desc;
      link.href = gallery[index].link;

      // 再淡入
      photo.style.opacity = 1;
      title.style.opacity = 1;
      desc.style.opacity = 1;
    }, 300);
  }

  // 綁定事件監聽器（只綁一次）
  nextBtn.addEventListener("click", () => {
    current = (current + 1) % gallery.length;
    showItem(current);
  });

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + gallery.length) % gallery.length;
    showItem(current);
  });

  // 初始顯示第一張
  showItem(current);
});
