from fastapi import FastAPI
import random 
from datetime import datetime
import time

app = FastAPI()


@app.post("/create-logo")
def create_logo(prompt: str):
    waiting_time = random.randint(1, 10)
    time.sleep(waiting_time)

    ai_logo = {
        "logo_url": "../../assets/logo.png",
        "prompt": prompt,
        "status": "created",
        "create": datetime.now().isoformat()

    }
    return ai_logo