![App Screenshots](./src/assets/hexa.png)

# Hexa

**Hexa** is a modern, modular, and scalable React Native app for creative logo generation. It allows users to enter prompts, select logo styles, and instantly generate designs with visual feedback.

---

## 🎬 Demo

![App Demo](./src/assets/screenrecord.gif)

---

## 🛠 Usage

1. Enter a prompt in the input field  
2. Select a logo style  
3. Press **Create**  
4. StatusChip updates according to API response  
5. If successful, navigates to OutputScreen to display logo  
6. Retry on failure  

---

## 🏗 Architecture

- **Frontend:**  
  - Built with **React Native** and **Expo**  
  - State management via `useState` and custom hooks  
  - Components:
    - `InputScreen` → Prompt input, logo selection, create button  
    - `StatusChip` → Status display (InProgress / Completed / Failed)  
    - `OutputScreen` → Display generated logo  

- **Backend:**  
  - Built with **Python 3.11+**, **FastAPI**  
  - Mock logo generation endpoint with optional simulated errors  

---

## ⚙️ Requirements

### Frontend

- Node.js >= 18  
- npm or yarn  
- Expo CLI  
- React Native  
- @tanstack/react-query  
- react-native-toast-message  
- expo-linear-gradient  

### Backend

- Python 3.11+  
- pip  
- FastAPI  
- Uvicorn  
- Pydantic  

---

## 🚀 Setup & Running

### 1️⃣ Backend

```bash
cd src/backend

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate   # macOS/Linux
# venv\Scripts\activate    # Windows

# Install dependencies
pip install -r requirements.txt

# Run FastAPI server
uvicorn main:app --reload



	•	FastAPI backend will run at: http://127.0.0.1:8000
	•	Swagger UI: http://127.0.0.1:8000/docs
	•	/create-logo endpoint accepts POST request with JSON body:
  {
  "prompt": "A futuristic logo for a tech startup"
}


*** Backend may randomly fail when the simulated processing time is over 5 seconds. ***


2️⃣ Frontend
# Install dependencies
npm install
# or
yarn install

# Start Expo
npm start
# or
yarn start



📝 Features
	•	Input a prompt to generate a logo
	•	Select a logo style
	•	StatusChip indicating:
	•	InProgress → Logo generation in progress
	•	Completed → Logo successfully created
	•	Failed → Error occurred, can retry
	•	API calls handled via TanStack Query
	•	Mock logo generation with Python backend

⸻

⚡ API Behavior
	•	POST /create-logo → expects { "prompt": string }
	•	Returns:
  {
  "logo_url": "../../assets/logo.png",
  "prompt": "User input",
  "status": "created",
  "created_at": "2025-12-03T14:00:00.000000"
}


⚠️ Notes
	•	Ensure backend is running before using the app