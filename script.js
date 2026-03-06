const LINKS = {
  download: "https://release-assets.githubusercontent.com/github-production-release-asset/1174207851/08aec3e7-a569-4ced-8321-d518fbeb7b60?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-03-06T08%3A33%3A10Z&rscd=attachment%3B+filename%3DChudWare-1.0.4.jar&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-03-06T07%3A32%3A41Z&ske=2026-03-06T08%3A33%3A10Z&sks=b&skv=2018-11-09&sig=BsC8KRsDACFrMTC%2FqLeFEG3tS2nbyzwpL0YywDdNwdo%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc3Mjc4MzEyNSwibmJmIjoxNzcyNzgyODI1LCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.WvoZqbsIEDt3_vhb7RI2EVuKTv3ti6Fffv2KkRCc984&response-content-disposition=attachment%3B%20filename%3DChudWare-1.0.4.jar&response-content-type=application%2Foctet-stream",
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
