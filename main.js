const lines = [
  "ターミナルで判断する、承認ディシプリン系デスクトップゲーム。",
  "Engineer-friendly: Tauri · React · type-safe scenarios.",
];

const el = document.getElementById("typed");
if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  if (el) el.textContent = lines.join(" ");
} else {
  const full = lines.join(" ");
  let i = 0;
  const frameMs = 28;

  function tick() {
    if (i <= full.length) {
      el.textContent = full.slice(0, i);
      i += 1;
      window.setTimeout(tick, frameMs);
    }
  }

  tick();
}
