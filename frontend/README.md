

---

```markdown
# 🧠 Porter Stemmer Algorithm Project

A full-stack implementation of the **Porter Stemming Algorithm** using:
- 🐍 **Flask (Python)** for the backend API  
- ⚛️ **React.js** for the frontend  
- ✨ **Framer Motion**, **Styled Components**, and **GSAP** for smooth UI effects  
- 💧 **LiquidEther**, **GlareHover**, and **VariableProximity** components via **shadcn** for interactive visuals  

---

## 🚀 Project Overview

This project demonstrates the **Porter Stemmer Algorithm** — a process that reduces words to their root form.  
Example:

```

running → run
progression → progress

```

The **React frontend** sends user input to a **Flask backend**, which processes and returns the stemmed result.

---

---

## ⚙️ Backend Setup (Flask)

### 1️⃣ Navigate to backend folder
```bash
cd backend
````

### 2️⃣ Install all dependencies

```bash
pip install -r requirements.txt
```

### 3️⃣ Run the backend server

```bash
python app.py
```

✅ You should see:

```
 * Running on http://127.0.0.1:5000
```

---

## 💻 Frontend Setup (React)

### 1️⃣ Open a new terminal and go to the frontend folder

```bash
cd frontend
```

### 2️⃣ Install required npm dependencies

```bash
npm install
```

If needed, manually install:

```bash
npm install react-router-dom styled-components framer-motion gsap three react-icons
```

### 3️⃣ Install interactive UI components

```bash
npx shadcn@latest add https://reactbits.dev/r/LiquidEther-JS-CSS
npx shadcn@latest add https://reactbits.dev/r/GlareHover-JS-CSS
npx shadcn@latest add https://reactbits.dev/r/VariableProximity-JS-CSS
```

### 4️⃣ Start the React app

```bash
npm start
```

✅ Runs on:

```
http://localhost:3000
```

---

## 🔗 Connecting Frontend & Backend

The frontend connects to:

```
http://localhost:5000/stem
```

Make sure:

* Backend (`app.py`) is **running** on port `5000`
* Frontend (`npm start`) is **running** on port `3000`

Then open:
👉 [http://localhost:3000/algorithm](http://localhost:3000/algorithm)

Type any word (e.g., `running`) and click **Run Algorithm**

Expected result:

```
Stemmed word: run
```

---

## 🧩 Common Errors & Fixes

### ❌ “Failed to connect to backend”

* Backend not running or wrong port
* Make sure you use `http://localhost:5000/stem` (not `https`)
* CORS properly enabled in `app.py`:

  ```python
  from flask_cors import CORS
  CORS(app, resources={r"/*": {"origins": "*"}})
  ```

---

### ❌ “NoneType has no len()”

Add these fixes inside `stemmer_clean.py`:

```python
def cvc(word):
    if len(word) < 3:
        return False
    vowels = "aeiou"
    return (
        word[-1] not in vowels and
        word[-2] in vowels and
        word[-3] not in vowels and
        word[-1] not in "wxy"
    )

def step_1c(word):
    if vowels(word) and word.endswith("y"):
        word = word[:-1] + "i"
    return word
```

---

## 🧠 Tech Stack

| Category          | Technology                                 |
| ----------------- | ------------------------------------------ |
| Frontend          | React.js                                   |
| Animations        | Framer Motion, GSAP                        |
| Styling           | Styled Components                          |
| Visual Effects    | LiquidEther, GlareHover, VariableProximity |
| Backend           | Flask                                      |
| API Communication | REST + Flask-CORS                          |

---

## 🧾 License

This project was developed for educational purposes under **DY Patil University (CSBS)**.

---

### 👨‍💻 Author

**Soham Vaity**
DY Patil University — B.Tech CSBS
*Porter Stemmer Full Stack Implementation*

```
