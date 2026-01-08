const photos = [
  {
    src: "/image/view01.jpg",
    title: "藍天與飛機尾流",
    desc: "在晴朗無雲的天空中，一道飛機尾流筆直劃過，象徵人類科技與自然的交會。右下角的樹影與陽光形成對比，強調這一瞬間的靜與動、自然與人工。"
  },
  {
    src: "/image/view02.jpg",
    title: "協同飛行的韻律",
    desc: "兩組鳥群以 V 字隊形飛越雲層，展現自然界的智慧與秩序。黑白色調突顯天空的層次與鳥群的剪影，象徵遷徙旅程中的堅定與優雅。"
  },
  {
    src: "/image/view03.jpg",
    title: "靜謐水面上的光影詩",
    desc: "平靜的湖面映照著天際的柔光，可能是日出也可能是日落。遠方的地平線與微光交織，營造出一種沉靜、冥想的氛圍，適合表達自然的療癒力。"
  },
  {
    src: "/image/view04.jpg",
    title: "穿越黑夜的速度之舞",
    desc: "在星空下，蜿蜒山路被車輛的光軌點亮，形成動態的光之曲線。遠方天空中的流星或衛星痕跡，為這幅畫面增添宇宙感與探索精神。"
  },
  {
    src: "/image/view05.jpg",
    title: "都市上空的瞬間軌跡",
    desc: "黑白城市剪影之上，一道斜斜的飛機尾流劃破天際，形成強烈的視覺張力。這是都市與天空的對話，也是時間與速度的象徵。"
  },
  {
    src: "/image/view06.jpg",
    title: "夢境般的夜空流動",
    desc: "星星與雲層在長曝光下呈現出流動感，彷彿夜空在呼吸。這幅畫面充滿詩意與神秘，適合用來表達宇宙的靜謐與無垠。"
  },
  {
    src: "/image/view07.jpg",
    title: "人與自然的清晨交會",
    desc: "雪山在晨光中閃耀，滑雪道與停車場交織出度假村的生活場景。前景的車輛與電線桿，與背景的壯麗山景形成對比，展現人類活動與自然環境的融合。"
  }
];

let currentIndex = 0;
const photo = document.getElementById("gallery-photo");
const title = document.getElementById("photo-title");
const desc = document.getElementById("photo-desc");

const currentIndexElement = document.getElementById("photo-counter");
const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");

function showPhoto(index) {
  photo.classList.remove("active"); // 淡出
  setTimeout(() => {
    photo.src = photos[index].src;
    title.textContent = photos[index].title;
    desc.textContent = photos[index].desc;
    
    // 更新計數器 (例如: 01 / 07)
    const displayIndex = (index + 1).toString().padStart(2, '0');
    const totalCount = photos.length.toString().padStart(2, '0');
    currentIndexElement.textContent = `${displayIndex} / ${totalCount}`;
    
    photo.classList.add("active"); // 淡入
  }, 400);
}

// 點擊箭頭切換
prevArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  showPhoto(currentIndex);
});

nextArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % photos.length;
  showPhoto(currentIndex);
});

// 初始顯示
showPhoto(currentIndex);
