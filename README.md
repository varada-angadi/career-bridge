# AI Interview Preparation Platform

AI-powered interview preparation platform built with MERN and Google Gemini AI. Generates personalized interview questions, match scores, preparation roadmaps, and ATS-friendly resumes based on a candidate’s resume and target job description.

---

## Features
- Job Match Score
- Technical Interview Questions
- Behavioral Interview Questions
- Personalized Preparation Roadmap
- ATS-Friendly Resume PDF
l Questions with Answers
- Skill Gap Analysis
- Day-wise Preparation Plan

## Tech Stack

- **Frontend:** React.js, SCSS, Axios
- **Backend:** Node.js, Express.js, MongoDB, Multer, pdf-parse, Puppeteer
- **AI & Automation:** Google Gemini AI, Zod

## Project Structure
├── Frontend
|   ├──src
│     ├── features
│     ├── style
│     ├── style.css
│     ├── App.jsx
│     ├── app.routes.jsx
│     └── main.jsx
│
├── Backend
│   ├── src
│     ├── controllers
│     ├── middlewares
│     ├── routes
│     ├── services
│     ├── models
│     └── config
│     └── app.js
│   └── server.js

---

## Installation

```bash
git clone https://github.com/varada-angadi/career-bridge.git
cd career-bridge
cd Frontend
npm instal
cd Backend
npm instal
Set Environment Variables in Backend/.env
```

### Create a .env file
```env
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
GOOGLE_GENAI_API_KEY=your_google_api_key
```

### Run the Server
```
cd Backend
npm run dev
cd Frontend
npm run dev
```

