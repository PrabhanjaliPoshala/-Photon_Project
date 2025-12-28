from fastapi import FastAPI, WebSocket
from fastapi.staticfiles import StaticFiles
import random
import asyncio

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

stocks = ["AAPL", "TSLA", "AMZN", "GOOGL", "MSFT"]

state = {
    s: {
        "price": random.randint(120, 200),
        "volume": random.randint(1000, 5000),
        "high": 0
    }
    for s in stocks
}

@app.get("/")
async def root():
    return open("static/index.html").read()

@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    await ws.accept()
    while True:
        data = {}
        for s in stocks:
            change = random.uniform(-3, 3)
            state[s]["price"] += change
            state[s]["volume"] = random.randint(1000, 6000)

            if state[s]["price"] > state[s]["high"]:
                state[s]["high"] = state[s]["price"]

            volatility = abs(change)

            data[s] = {
                "price": round(state[s]["price"], 2),
                "volume": state[s]["volume"],
                "volatility": round(volatility, 2),
                "high": round(state[s]["high"], 2)
            }

        await ws.send_json(data)
        await asyncio.sleep(1)
