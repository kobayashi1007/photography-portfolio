const photos = [
  {
    src: "./image/people1.jpg",
    title: "春日花影中的和風之美",
    desc: "身穿花紋和服的女子站在盛開的花樹下，髮間點綴花飾，展現典雅與季節感。背景的庭園與圍欄營造出寧靜氛圍，是春季祭典或賞花時光的寫照。"
  },
  {
    src: "./image/people2.jpg",
    title: "城市邊緣的靜默瞬間",
    desc: "白衣男子站在都市街頭，背景是排隊人群與玻璃建築，光影交錯。這是一個日常卻富有故事感的場景，彷彿捕捉了某個等待或轉折的片刻。"
  },
  {
    src: "./image/people3.jpg",
    title: "旅途中的靜止與準備",
    desc: "在昏暗的登山步道站牌旁，一人坐著穿戴手套，機車停在前方，燈光照亮夜色。這是旅途中短暫的停留，也可能是準備啟程的瞬間，充滿探索感。"
  },
  {
    src: "./image/people4.jpg",
    title: "光影之間的日常流動",
    desc: "兩人從建築出口走出，其中一人推著嬰兒車。外頭是綠意與現代建築，室內黑影與窗框構成強烈對比，捕捉了生活的流動與城市的節奏。"
  },
  {
    src: "./image/people5.jpg",
    title: "雪地裡的歡笑與陪伴",
    desc: "兩人坐在雪橇上，孩子穿著亮色雪衣笑容滿面，大人背著迷彩包包。背景是雪地與住宅，前方的安全網與樹木構成冬季活動的溫馨場景。"
  },
  {
    src: "./image/people6.jpg",
    title: "速度與風格的城市剪影",
    desc: "騎士站在樓梯旁，下方是貼滿花紋與品牌貼紙的黑色 Honda 機車。背景是現代混凝土牆，構成冷峻與個性化的對比，展現都市騎士的風格態度。"
  },
  {
    src: "./image/people7.jpg",
    title: "玻璃建築與電扶梯人群",
    desc: "人群搭乘電扶梯上行，背景是曲線玻璃與鋼構建築，光線透過天窗灑落。這是一幅都市節奏的縮影，展現人與空間的動態關係。"
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
