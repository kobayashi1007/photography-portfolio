document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const muteBtn = document.getElementById("mute-btn");
  const volumeControl = document.getElementById("volume-control");
  const volumePct = document.getElementById("volume-pct");

  // 靜音按鈕
  muteBtn.addEventListener("click", () => {
    music.muted = !music.muted;
    muteBtn.innerHTML = music.muted ? "🔊 開聲" : "🔇 靜音";
  });

  // 音量控制橫桿
  volumeControl.addEventListener("input", () => {
    const val = volumeControl.value;
    music.volume = val;
    // 更新百分比文字 (例如 0.5 -> 50%)
    if (volumePct) {
      volumePct.textContent = Math.round(val * 100) + "%";
    }
  });
});
