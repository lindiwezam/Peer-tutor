
# 📘 **PeerTutor Connect – MERN Stack (SDG 4: Quality Education)**

A real-time peer tutoring platform designed to improve access to academic support by connecting students with qualified tutors. This project aligns with **UN Sustainable Development Goal 4: Quality Education** and provides tools for communication, learning assistance, and academic management.

---

## 🚀 **Features**

### 🎓 **For Students**

* Create an account & login
* Browse available tutors
* Search tutors by subject
* Send real-time messages using Socket.io
* View personal dashboard
* Track tutoring sessions

### 🧑‍🏫 **For Tutors**

* Tutor registration & login
* Profile management
* Receive messages from students
* Update subjects offered
* Respond to student inquiries in real-time

### 💬 **Messaging System**

* Real-time chat powered by **Socket.io**
* Online/offline indicators
* Instant message delivery

### 📊 **Dashboards**

* Student dashboard
* Tutor dashboard
* Organized session history
* Quick access to learning resources

### 📡 **Backend API**

* Authentication (JWT)
* User management (Students & Tutors)
* Messaging endpoints
* Secure database operations with Mongoose

---

## 🛠 **Tech Stack**

### **Frontend**

* React.js
* Tailwind CSS
* React Router
* Axios

### **Backend**

* Node.js
* Express.js
* MongoDB + Mongoose
* Socket.io
* JWT Authentication
* dotenv

### **Tools**

* Vite
* Git & GitHub
* Postman / Thunder Client

---

## 📁 **Project Structure**

```
peertutor-connect/
 ┣ backend/
 ┃ ┣ config/
 ┃ ┣ controllers/
 ┃ ┣ middleware/
 ┃ ┣ models/
 ┃ ┣ routes/
 ┃ ┣ server.js
 ┃ ┣ socket.js
 ┃ ┗ package.json
 ┣ frontend/
 ┃ ┣ src/
 ┃ ┣ public/
 ┃ ┗ package.json
 ┣ README.md
 ┗ .gitignore
```

---

## ⚙️ **Installation & Setup**

### **1. Clone the repository**

```
git clone https://github.com/your-username/peertutor-connect.git
cd peertutor-connect
```

---

## ⭐ **Setup Backend**

```
cd backend
npm install
```

### **Create .env**

```
MONGO_URI=your_mongo_db_connection
JWT_SECRET=your_secret_key
PORT=3000
```

### **Start Backend**

```
npm run dev
```

---

## ⭐ **Setup Frontend**

```
cd ../frontend
npm install
npm run dev
```

The app runs at:
➡️ **[http://localhost:5173](http://localhost:5173)**

Backend runs at:
➡️ **[http://localhost:3000](http://localhost:3000)**

---

## 🔌 **API Endpoints Overview**

### **Auth**

| Method | Endpoint                   | Description    |
| ------ | -------------------------- | -------------- |
| POST   | /api/auth/student/register | Student signup |
| POST   | /api/auth/student/login    | Student login  |
| POST   | /api/auth/tutor/register   | Tutor signup   |
| POST   | /api/auth/tutor/login      | Tutor login    |

---

### **Users**

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | /api/users/students | Fetch all students |
| GET    | /api/users/tutors   | Fetch all tutors   |

---

### **Messaging**

| Method | Endpoint              | Description      |
| ------ | --------------------- | ---------------- |
| POST   | /api/messages/send    | Send message     |
| GET    | /api/messages/:userId | Get chat history |

---

## 🔥 **Real-Time Messaging**

Socket.io handles live chat:

* Student sends message → Tutor receives instantly
* Typing indicators (optional)
* Real-time updates without page refresh

---


## 🎯 **SDG 4 Alignment (Quality Education)**

PeerTutor Connect supports SDG 4 by:

* Increasing access to tutoring
* Providing equal learning opportunities
* Enabling students to get real-time academic help
* Reducing educational gaps through technology

---

## 🤝 Contribution

Pull requests are welcome!
For major changes, please open an issue first.

---

## 📜 License

This project is licensed under the MIT License.


🧑‍💻 Author

PeerTutor Connect was created as part of the MERN Stack Final Project, aligned with UN SDG 4: Quality Education.

Developed by: Zama Zimu
Year: 2025
