from google.cloud import firestore
import random
import time

db = firestore.Client()

def job_trigger(event, context):
   
    full_path = context.resource
    job_id = full_path.split("/")[-1]


    job_ref = db.collection("jobs").document(job_id)

    delay = random.randint(30, 60)
    time.sleep(delay)

    mock_image_url = "../src/assets/logo.png"

    job_ref.update({
        "status": "done",
        "output": mock_image_url
    })

