document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const muteBtn = document.getElementById("mute-btn");
  const volumeControl = document.getElementById("volume-control");
  const volumePct = document.getElementById("volume-pct");

  if (!music) return;

  // 從 sessionStorage 還原狀態
  const savedTime = sessionStorage.getItem("musicTime");
  const savedMuted = sessionStorage.getItem("musicMuted") === "true";
  const savedVolume = sessionStorage.getItem("musicVolume");

  if (savedVolume !== null && !isNaN(savedVolume)) {
    music.volume = parseFloat(savedVolume);
    if (volumeControl) volumeControl.value = savedVolume;
    if (volumePct) volumePct.textContent = Math.round(savedVolume * 100) + "%";
  } else {
    music.volume = 0.5;
  }

  music.muted = savedMuted;
  if (muteBtn) {
    muteBtn.innerHTML = music.muted ? "🔊 開聲" : "🔇 靜音";
  }

  const setTime = () => {
    if (savedTime && !isNaN(savedTime)) {
      music.currentTime = parseFloat(savedTime);
    }
  };
  if (music.readyState >= 1) {
    setTime();
  } else {
    music.addEventListener("loadedmetadata", setTime);
  }

  const startPlayback = () => {
    if (music.paused && !music.muted) {
      music.play().catch(() => {
        /* 瀏覽器自動播放限制，等待互動 */
      });
    }
  };
  document.addEventListener("click", startPlayback, { once: true });
  startPlayback();

  // 定期保存播放時間
  music.addEventListener("timeupdate", () => {
    if (!music.paused) {
      sessionStorage.setItem("musicTime", music.currentTime);
    }
  });

  // 靜音按鈕
  if (muteBtn) {
    muteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      music.muted = !music.muted;
      muteBtn.innerHTML = music.muted ? "🔊 開聲" : "🔇 靜音";
      sessionStorage.setItem("musicMuted", music.muted);
      if (!music.muted) {
        music.play();
      }
    });
  }

  // 音量控制
  if (volumeControl) {
    volumeControl.addEventListener("input", () => {
      const val = volumeControl.value;
      music.volume = val;
      sessionStorage.setItem("musicVolume", val);
      if (volumePct) {
        volumePct.textContent = Math.round(val * 100) + "%";
      }
    });
  }
});
