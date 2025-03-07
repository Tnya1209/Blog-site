# Blog Site

A simple blog site built using **Node.js, Express, MongoDB, and JWT authentication**. Users can create, publish, and manage blog posts, while authentication is handled using JWT.

## 📌 Features
- User Authentication (Signup & Login)
- JWT-based Authentication
- Create, Publish, and Delete Blogs
- Admin Panel to View All Blogs

## 🚀 Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt
- **Environment Variables**: dotenv

## 🛠️ Setup Instructions
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/blog-site.git
cd blog-site
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
> ⚠️ **Note:** You need to add environment variables in a `.env` file, but they are not included yet.

Create a `.env` file in the root directory and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000  # Or any other port
```

### 4️⃣ Start the Server
```sh
npm run server
```

The server will run on `http://localhost:5000`

## 📜 API Endpoints
### 🔹 Authentication
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | `/api/auth/signup` | Register a new user |
| POST   | `/api/auth/login` | User login |

### 🔹 Blogs
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | `/api/blogs/` | Create a new blog (draft) |
| PUT    | `/api/blogs/publish/:id` | Publish a blog |
| GET    | `/api/blogs/` | Get published blogs (User view) |
| GET    | `/api/blogs/admin` | Get all blogs (Admin view) |
| DELETE | `/api/blogs/:id` | Delete a blog |

## ❗ Common Issues & Fixes
1. **Cannot POST /api/auth/signup**
   - Ensure MongoDB is running and `.env` variables are set up.
   - Check if the `User` model is correctly imported and connected.
   
2. **EADDRINUSE: Address already in use**
   - Kill the existing process using:
     ```sh
     npx kill-port 5000
     ```
   - Or run on a different port in `.env`.

3. **bcryptjs Deprecation Warning**
   - Switch to `bcrypt` instead of `bcryptjs` for better security:
     ```sh
     npm uninstall bcryptjs && npm install bcrypt
     ```

## ✨ Future Enhancements
- Implement frontend using React
- Add role-based access control (Admin & User)
- Enable blog commenting

---


