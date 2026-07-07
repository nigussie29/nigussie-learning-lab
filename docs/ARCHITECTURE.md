# 🏗️ SkillBridge Academy Architecture

## Purpose

This document describes the technical architecture of SkillBridge Academy and serves as a guide for future development.

---

# Architecture Philosophy

We believe software should be:

- Modular
- Reusable
- Scalable
- Maintainable
- Easy to understand

Every feature should follow these principles.

---

# High-Level Architecture

```
                 SkillBridge Academy
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
     Courses         Projects        Dashboard
        │                │                │
        ▼                ▼                ▼
     Lessons      Learning Experience  Analytics
        │                │                │
        └────────────────┼────────────────┘
                         │
                         ▼
                    🤖 Luminery
                  AI Learning Coach
                         │
                         ▼
                📐 Applied Mathematics
                         │
                         ▼
                  💼 TalentBridge AI
                         │
                         ▼
                   🔬 Research Lab
```

---

# Frontend Stack

- React
- Vite
- React Router
- Tailwind CSS
- React Icons

---

# Current Folder Structure

```
src/
│
├── components/
│   ├── course/
│   ├── dashboard/
│   ├── lesson/
│   ├── luminery/
│   ├── project/
│   └── ui/
│
├── data/
│
├── pages/
│
├── services/
│
├── hooks/
│
├── assets/
│
└── App.jsx
```

---

# SkillBridge Learning Experience (SLE)

Every project follows the same learning framework.

```
🌍 Real-World Scenario

↓

🎯 Your Mission

↓

📐 Mathematics Behind the Solution

↓

🛠 Your Toolbox

↓

💻 Build Guide

↓

🤖 Luminery Coach

↓

💼 Career Value

↓

🚀 Next Mission
```

---

# Design Principles

Every component should:

- Have a single responsibility
- Be reusable
- Receive data through props
- Keep business logic separate from presentation
- Follow consistent styling

---

# Data Strategy

Data is stored separately from UI.

Examples:

- courses.js
- projects.js
- projectDetails.js

This allows one component to render many different learning experiences.

---

# Future Architecture

Upcoming modules:

- Authentication
- Portfolio
- AI Mentor
- Certificates
- TalentBridge AI
- Research Lab
- Admin Dashboard
- Instructor Dashboard
- Analytics Engine

---

# Development Workflow

Every feature follows this cycle:

Design

↓

Build

↓

Test

↓

Commit

↓

Push

↓

Document

↓

Next Feature