let priceData = [];
let volumeData = [];
let volatilityData = [];
let labels = [];

const MAX_POINTS = 8;
const PRICE_ALERT = 140;

let alertSound = new Audio("/static/alert.mp3");

// Get current time
function getTime() {
  return new Date().toLocaleTimeString();
}

// Common chart options
const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: { ticks: { color: "white", font: { size: 10 } } },
    y: { ticks: { color: "white", font: { size: 10 } } }
  },
  plugins: {
    legend: { labels: { color: "white" } }
  }
};

// Price chart
const priceChart = new Chart(
  document.getElementById("priceGraph"),
  {
    type: "line",
    data: { labels, datasets: [{
      label: "Price ($)",
      data: priceData,
      borderColor: "cyan",
      backgroundColor: "rgba(0,255,255,0.2)",
      fill: true,
      tension: 0.3,
      pointRadius: 4
    }]},
    options
  }
);

// Volume chart
const volumeChart = new Chart(
  document.getElementById("volumeGraph"),
  {
    type: "bar",
    data: { labels, datasets: [{
      label: "Volume",
      data: volumeData,
      backgroundColor: "orange"
    }]},
    options
  }
);

// Volatility chart
const volChart = new Chart(
  document.getElementById("volatilityGraph"),
  {
    type: "line",
    data: { labels, datasets: [{
      label: "Volatility %",
      data: volatilityData,
      borderColor: "red",
      backgroundColor: "rgba(255,0,0,0.2)",
      fill: true,
      tension: 0.3,
      pointRadius: 4
    }]},
    options
  }
);

// Update dashboard
function updateUI(stock, price, volume, vol) {
  document.getElementById("stockName").innerText = stock;
  document.getElementById("price").innerText = `💰 Price: $${price}`;
  document.getElementById("volume").innerText = `📊 Volume: ${volume}`;
  document.getElementById("volatility").innerText = `📉 Volatility: ${vol.toFixed(2)}%`;
  document.getElementById("high").innerText =
    `🏆 Highest: $${Math.max(...priceData)}`;

  if (price >= PRICE_ALERT) {
    alertSound.play();
    priceChart.data.datasets[0].borderColor = "red";
  } else {
    priceChart.data.datasets[0].borderColor = "cyan";
  }
}

// Stock update
function selectStock(stock) {
  let price = Math.floor(Math.random() * 50 + 120);
  let volume = Math.floor(Math.random() * 900);
  let vol = Math.random() * 5;

  labels.push(getTime());
  priceData.push(price);
  volumeData.push(volume);
  volatilityData.push(vol);

  if (labels.length > MAX_POINTS) {
    labels.shift();
    priceData.shift();
    volumeData.shift();
    volatilityData.shift();
  }

  updateUI(stock, price, volume, vol);

  priceChart.update();
  volumeChart.update();
  volChart.update();
}

// Auto update every 3 seconds
setInterval(() => {
  selectStock(document.getElementById("stockName").innerText || "AAPL");
}, 3000);
