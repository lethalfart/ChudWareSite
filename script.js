const LINKS = {
  download: "https://github.com/lethalfart/ChudWare/releases/download/v1.0.4/ChudWare-1.0.4.jar",
  discord: "https://discord.gg/GgSekSqvfS",
  source: "https://github.com/lethalfart/ChudWare"
};

const linkMap = [
  ["primary-download", LINKS.download],
  ["discord-logo-link", LINKS.discord],
  ["source-logo-link", LINKS.source]
];

for (const [id, href] of linkMap) {
  const element = document.getElementById(id);
  if (element) element.href = href;
}

const rainLayer = document.querySelector(".rain");
if (rainLayer) {
  const dropCount = 90;
  for (let i = 0; i < dropCount; i += 1) {
    const drop = document.createElement("span");
    drop.className = "rain-drop";

    const left = Math.random() * 100;
    const height = 28 + Math.random() * 58;
    const duration = 1.9 + Math.random() * 1.8;
    const delay = Math.random() * -2;
    const opacity = 0.2 + Math.random() * 0.5;

    drop.style.left = `${left}%`;
    drop.style.height = `${height}px`;
    drop.style.opacity = opacity.toFixed(2);
    drop.style.animationDuration = `${duration.toFixed(2)}s`;
    drop.style.animationDelay = `${delay.toFixed(2)}s`;
    rainLayer.appendChild(drop);
  }
}

document.getElementById("year").textContent = new Date().getFullYear();
