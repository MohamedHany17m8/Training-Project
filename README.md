# 🚀 Training Project

<div align="center">
  
  ![MERN Stack](https://img.shields.io/badge/Stack-MERN-61DAFB?style=for-the-badge&logo=mongodb&logoColor=white&labelColor=20232a)
  ![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
  ![Status](https://img.shields.io/badge/Status-Active-4EAA25?style=for-the-badge&logo=statuspage&logoColor=white)
  ![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge&logo=opensourceinitiative&logoColor=white)

  <img src="frontend/public/screenshot-for-readme.png" alt="Project Screenshot" width="600px" style="border-radius: 10px; margin: 20px 0; box-shadow: 0 5px 15px rgba(0,0,0,0.2);" />

</div>

## 📋 Overview

A comprehensive MERN stack training project demonstrating a full-stack application with separate frontend and backend deployments on Vercel. This project showcases modern web development practices and architecture.

## 🔧 Tech Stack

<div align="center">
  
  ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
  ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
  ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  
</div>

## ✨ Features

- 🔐 User authentication and authorization
- 🛒 Shopping cart functionality
- 💳 Secure payment processing
- 📱 Responsive design for all devices
- 🌐 RESTful API architecture
- 🔄 State management with React

## 🛠️ Development Setup

### Backend

```bash
# Create .env file with:
# MONGODB_URI=your_mongodb_connection_string
# PORT=5000
# FRONTEND_URL=http://localhost:3000
# NODE_ENV=development

cd backend
npm install
npm run dev  # Server starts on http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev  # Available at http://localhost:3000
```

## 🚀 Deployment Configuration

### Backend (Vercel)

<details>
<summary>📝 Configuration Steps</summary>

1. Update the frontend URL in `vercel.json`
2. Modify CORS settings in `server.js` file
3. Set environment variables in Vercel dashboard

</details>

### Frontend (Vercel)

<details>
<summary>📝 Configuration Steps</summary>

1. Update the backend URL in `vercel.json`
2. Modify API base URL in `vite.config.js` file
3. Set environment variables in Vercel dashboard

</details>

## 📁 Project Structure

```
├── backend/               # Express server
│   ├── controllers/       # Route controllers
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   └── server.js          # Server entry point
│
├── frontend/              # React client
│   ├── public/            # Static assets
│   └── src/               # React source files
│       ├── components/    # UI components
│       ├── pages/         # Page components
│       └── stores/        # State management
```

## 📫 Contact & Support

For questions or support, please open an issue in the repository.

---

<div align="center">

Made with ❤️ for training purposes

![Visitors](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=Visitors&query=value&url=https://api.countapi.xyz/hit/training-project/readme&style=for-the-badge&logo=github)

</div>
