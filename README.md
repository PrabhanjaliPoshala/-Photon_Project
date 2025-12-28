
# Photon – Real-Time Stock Monitoring Dashboard

A real-time web-based stock analytics dashboard with live price tracking, volume analysis, volatility visualization, and alert-based monitoring using WebSockets.

---

## 🚀 Features

- 📈 **Live Stock Price Updates** – Real-time updates from the backend
- 📊 **Price, Volume & Volatility Graphs** – Interactive graphs using Canvas
- 🔴 **Alert System** – Graph and card flash red when price changes exceed a threshold, with optional sound
- 🔊 **Mute Button** – Enable/disable alert sound
- 🏆 **Highest Price Tracker** – Shows highest price reached
- 🟢 **Stock Selector** – Choose between multiple stocks (AAPL, TSLA, AMZN, GOOGL, MSFT)
- 📉 **Visual Trend Analysis** – Easy understanding of price movement
- 💻 **Responsive Design** – Fits screen without scrollbars
- 🎯 **AI Confidence Score** – AI-assessed confidence for price trend prediction

---

## 📁 Project Structure

```

Photon_Project/
│
├─ main.py                 # FastAPI backend
├─ requirements.txt        # Python dependencies
├─ README.md               # Project documentation
├─ .gitignore              # Git ignored files
│
├─ static/
│   ├─ index.html          # Dashboard UI
│   ├─ style.css           # Styling
│   ├─ script.js           # Graphs, alerts, WebSocket logic
│   └─ alert.mp3           # Alert sound

```

---

## 📦 Dependencies

- **Python 3.10+**
- **FastAPI**
- **Uvicorn**

Python packages:
```

fastapi
uvicorn[standard]
python-multipart

````

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/PrabhanjaliPoshala/-Photon_Project.git
cd Photon_Project
````

### 2️⃣ Create virtual environment (recommended)

```bash
python -m venv venv
```

### 3️⃣ Activate virtual environment

**Windows**

```bash
venv\Scripts\activate
```

**Linux / Mac**

```bash
source venv/bin/activate
```

### 4️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

### 5️⃣ Run the FastAPI server

```bash
python -m uvicorn main:app --reload
```

### 6️⃣ Open in browser

```
http://127.0.0.1:8000/static/index.html
```

---

## 🧪 How to Use

* Main graph shows real-time stock price
* Volume and volatility graphs update live
* Stock selector switches companies
* Alert sound triggers on high price movement
* Red highlight appears during alerts
* AI confidence score updates dynamically

---

## 📝 Notes

* Ensure browser allows WebSocket connections
* `alert.mp3` must be inside the `/static` folder
* Static files are served using FastAPI `StaticFiles`

---

## 🔗 GitHub Repository

[https://github.com/PrabhanjaliPoshala/-Photon_Project](https://github.com/PrabhanjaliPoshala/-Photon_Project)

---
## 📸 Screenshots

### 🔹 Main Dashboard View
![Photon Dashboard](dashboard.png)

## 🎥 Demo Video (Screen Recording)

▶️ Live dashboard demonstration showing:
- Real-time stock price updates  
- Volume & volatility graphs  
- Alert trigger with sound and red highlight  
- Stock switching (AAPL, TSLA, AMZN, GOOGL, MSFT)

🔗 Watch the demo:  
https://drive.google.com/file/d/1eaet0GwwM8aSWfV6w_4XN05pGdnBvdAK/view?usp=sharing




## 🏢 Developed During Internship

This project was developed as part of an internship at **Infotact Solutions**, under the guidance and mentorship provided during the internship period.

**Organization:** Infotact Solutions  
**Project Type:** Internship Project  
**Role:** Python Development Intern



---

## 🛠 Tech Stack

* Python
* FastAPI
* Uvicorn
* WebSockets
* HTML5
* CSS3
* JavaScript
* HTML5 Canvas
* Chart.js

---

## 📚 Inspiration / References

* Real-time stock market dashboards
* AI-assisted trading visualization
* Event-driven systems using WebSockets

```

---


