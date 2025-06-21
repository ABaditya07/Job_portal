# 🧑‍💼 Job Portal App

A modern full-stack **Job Portal Application** that connects **job seekers** with **employers**, built with the latest web technologies.

---

## 🚀 Features

- 🔐 **Authentication & Authorization** (JWT)
- 👤 **User Roles** – Admin, Employer, and Job Seeker
- 📄 **Post and Manage Jobs**
- 📥 **Apply to Jobs**
- 💾 **Saved Jobs**
- 🔎 **Search & Filter by title, category, location**
- 📱 **Responsive UI** – works on all devices
- 🌐 **RESTful API Integration**

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- React Router
- Axios
- Tailwind CSS / Bootstrap (depending on your use)

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for Authentication
- Bcrypt for Password Hashing

---

## 📂 Project Structure

```
job-portal/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.jsx
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/ABaditya07/Job_portal.git
cd Job_portal
```

### 2. Setup Backend

```bash
cd backend
npm install
# Create a .env file and add your environment variables
npm start
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Environment Variables (Backend)

Create a `.env` file in the `backend` directory with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

---

## 📸 Screenshots

> *(Add screenshots here if available)*  
> Example:
> - ✅ Homepage  
> - ✅ Employer Dashboard  
> - ✅ Job Listings Page  
> - ✅ Application Form

---

## 🤝 Contributing

Contributions are welcome!  
1. Fork the repository  
2. Create your feature branch:  
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:  
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request

---

## 📃 License

This project is licensed under the [MIT License](LICENSE)

---

## 🙋‍♂️ Author

**Aditya B** – [@ABaditya07](https://github.com/ABaditya07)

If you like this project, give it a ⭐ and share it with others!
