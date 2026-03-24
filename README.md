# Dynamic Product System (MERN)

## 📌 Overview
This project is a dynamic product management system built using the MERN stack. The system allows admins to create categories with custom attributes and dynamically add products based on those categories.

The main goal is to avoid hardcoding and build a scalable system where new categories can be added without frontend changes.

---

## 🚀 Features

- Dynamic Category Creation
- Dynamic Product Attributes (based on category)
- Add Product with auto-generated fields
- Product Listing with dynamic attributes
- Product Details Page
- Backend-driven Filters (RAM, Color, etc.)
- No Hardcoding (Fully Dynamic System)

---

## 🛠️ Tech Stack

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB (Atlas)

---

## 📂 Project Structure

dynamic-product-system/
├── backend/
├── frontend/
├── README.md

---

## ⚙️ Setup Instructions

### 1. Clone the repository

git clone <https://github.com/rajkumarkushi/dynamic-products>

---

### 2. Backend Setup

cd backend  
npm install  

Create `.env` file inside backend folder:

MONGO_URI=your_mongodb_connection_string  

Run backend:

npm start  

---

### 3. Frontend Setup

cd frontend  
npm install  
npm start  

---

## ⚠️ Important Notes

- Backend must be running before starting frontend
- Backend runs on: http://localhost:5000
- Frontend runs on: http://localhost:3000
- Frontend depends on backend APIs

---

## 🔗 API Configuration

Frontend is configured to call backend at:

http://localhost:5000/api

---

## 🧪 How to Use

1. Create a category with attributes (e.g., Mobile with RAM, Storage)
2. Add product using dynamic form
3. View products and their attributes
4. Apply filters dynamically

---

## 📹 Demo Video

👉 [Watch Demo](https://drive.google.com/file/d/1q1o8DMhDGfPmibQt140b-QEBjhVEhqxU/view?usp=drive_link)

---

## 💡 Scalability

This system supports adding new categories without any frontend changes. The UI adapts automatically based on backend data, making it scalable and flexible.

---

## 👨‍💻 Author

Rajkumar