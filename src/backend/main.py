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



from google.cloud import firestore

def job_trigger(event, context):
    # Firestore doküman değişikliğinin tam yolu
    full_path = context.resource
    # jobs/{jobId} formatındaki job id’yi al
    job_id = full_path.split("/")[-1]

    print(f"Triggered for job: {job_id}")

    db = firestore.Client()

    # status güncelle
    db.collection("jobs").document(job_id).update({
        "status": "done"
    })

    print("Status updated!")