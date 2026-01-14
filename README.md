# Auth-UI-System

A simple Login & Signup UI built using **React + Vite**.
---
## Tech Stack

- React
- Vite
- JavaScript (ES6)
- CSS

---
## Project Structure
```text
Auth-UI-System/
├── public/
│   ├── image.png         # The Globe/Network background
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── LoginForm.jsx  # Sign-in specific logic
│   │   └── SignupForm.jsx # Sign-up specific logic
│   ├── styles/
│   │   ├── AuthModal.css  # Core Glassmorphic styling
│   │   ├── App.css
│   │   └── index.css      # Global resets
│   ├── App.jsx            # Main state management & layout
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```
## Features

- Login form (Email + Password)
- Signup form (Username, Email, Phone, Password)
- Form validation using controlled inputs
- Toggle between Login and Signup
- Clean and commented code

---
## Setup & Run

```bash
npm install
npm run dev
