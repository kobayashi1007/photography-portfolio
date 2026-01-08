const photos = [
  {
    src: "./image/street01.jpg",
    title: "懷舊時光的靜謐角落",
    desc: "牆面掛滿復古海報與模型車，昏黃燈光營造出溫暖氛圍。這是一間充滿懷舊情懷的咖啡館，適合沉澱心情、細品時光。"
  },
  {
    src: "./image/street02.jpg",
    title: "城市節奏中的交通秩序",
    desc: "紅色公車道與標示清晰的分隔線，展現都市交通的規劃與效率。工人與車輛穿梭其中，是日常生活的縮影，也是城市運作的節奏。"
  },
  {
    src: "./image/street03.jpg",
    title: "橋上列車與水岸風景的交會",
    desc: "銀色列車穿越白色高架橋，下方是水面與停泊船隻，遠方高樓林立。這是一幅都市交通與水岸景觀融合的現代畫面。"
  },
  {
    src: "./image/street04.jpg",
    title: "暮色下的城市剪影",
    desc: "通訊塔高聳於天際，街道上人車流動，天色漸暗卻色彩斑斕。這是一幅黃昏時分的城市風景，充滿層次與情感。"
  },
  {
    src: "./image/street05.jpg",
    title: "霓虹燈下的昭和味道",
    desc: "餐廳招牌高掛，昭和食堂與名物丼飯字樣醒目，周圍商業招牌林立。這是日本夜晚街頭的縮影，充滿懷舊與生活氣息。"
  },
  {
    src: "./image/street06.jpg",
    title: "光影交錯的城市邊緣",
    desc: "橋梁遮蔽陽光，住宅與電線構成層次分明的畫面。天空雲層變化豐富，是城市基層生活與自然光影的交錯瞬間。"
  },
  {
    src: "./image/street07.jpg",
    title: "暗影中的警示與未知",
    desc: "隧道內紅燈閃爍，遠方藍綠燈光與模糊人影營造出神秘氛圍。這是一幅充滿張力的場景，彷彿通往未知或等待揭示的故事。"
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
