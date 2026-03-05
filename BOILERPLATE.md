# Language Learning Buddy - Project Structure

This document outlines the standardized directory and file structure for the **Language Learning Buddy** application.

---

## 🎨 Frontend Structure (`frontend/`)

```text
frontend/
├── public/
│   └── vite.svg                 # Static assets
├── src/
│   ├── pages/
│   │   ├── AdminDashboard.jsx   # Admin management UI
│   │   ├── LearnerDashboard.jsx # User/Learner dashboard
│   │   ├── Login.jsx            # Authentication page
│   │   ├── Register.jsx         # Registration page
│   │   ├── AiChat.jsx           # AI Conversation interface
│   │   ├── BuddyMatch.jsx       # Peer matching interface
│   │   └── Vocabulary.jsx       # Vocabulary tracking
│   ├── components/
│   │   ├── Sidebar.jsx          # Navigation component
│   │   └── ProtectedRoute.jsx   # Auth guard component
│   ├── context/
│   │   ├── AuthContext.jsx      # Authentication state
│   │   └── ThemeContext.jsx     # Theme state
│   ├── App.jsx                  # Main application component & routing
│   ├── App.css                  # Global styling
│   ├── index.css                # Base CSS styles & variables
│   ├── main.jsx                 # React entry point
│   ├── api.js                   # Unified API service for backend calls
│   ├── theme.js                 # Theme configuration (tokens/colors)
│   ├── ThemeToggle.jsx          # Dark/light mode switcher
│   └── assets/
│       └── react.svg            # React logo asset
├── index.html                   # Main HTML template
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── package.json                 # Project dependencies
├── package-lock.json            # Dependency lock file
├── README.md                    # Project documentation
└── .gitignore
```

---

## ⚙️ Backend Structure (`backend/`)

```text
backend/
├── config/
│   └── db.js                    # Database connection configuration
├── controllers/
│   ├── authController.js        # Auth logic (Login/Register)
│   ├── chatController.js        # AI Chat logic
│   ├── buddyController.js       # Matching logic
│   └── ...                      # Feature-specific controllers
├── middlewares/
│   └── auth.js                  # JWT Authentication middleware
├── routes/
│   ├── authRoutes.js            # Auth endpoints
│   ├── chatRoutes.js            # Chat endpoints
│   ├── buddyRoutes.js           # Buddy endpoints
│   └── ...                      # Feature-specific routes
├── schema.sql                   # Database schema definitions
├── server.js                    # Main server entry point
├── .env                         # Environment variables
├── package.json                 # Backend dependencies
└── package-lock.json
```
