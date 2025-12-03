from fastapi import FastAPI
import random 
from datetime import datetime
import time
from pydantic import BaseModel


app = FastAPI()

class LogoPrompt(BaseModel):
    prompt: str
@app.post("/create-logo")
def create_logo(prompt: LogoPrompt):
    waiting_time = random.randint(1, 10)
    time.sleep(waiting_time)

    print(f" after {waiting_time} seconds delay.")

    if waiting_time > 5:
        raise HTTPException(status_code=500, detail="Error occurred during logo creation")


    ai_logo = {
        "logo_url": "../../assets/logo.png",
        "prompt": prompt,
        "status": "created",
        "create": datetime.now().isoformat()

    }
    return ai_logo