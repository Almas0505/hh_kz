# HH.kz - Backend for Job Portal (Headhunter-like)


This project is a job portal platform backend developed with **Node.js**, **Express**, and **PostgreSQL**. It allows job seekers to register, log in, search job listings, and upload CVs. Employers can post and manage job openings. The system also uses **JWT** for authentication and authorization.

---

## 🚀 Features

- **Authentication**: Secure user registration and login with JWT tokens.
- **Job Listings**: Employers can post and manage job offers.
- **Job Search**: Job seekers can search for job listings and apply for them.
- **File Uploads**: Upload resumes/CVs via Multer middleware.
- **Email Notifications**: Send automated emails for various events like registration and job posting.
- **Sequelize ORM**: Easy database interactions with migrations and seeders for testing.

---

## 🛠 Technologies Used

- **Node.js** – JavaScript runtime for building scalable applications
- **Express** – Fast, unopinionated web framework for Node.js
- **PostgreSQL** – Relational database management system
- **Sequelize** – ORM for PostgreSQL
- **JWT** – JSON Web Tokens for authentication and secure API access
- **Passport** – Middleware for handling user authentication
- **bcrypt** & **bcryptjs** – Password hashing for secure user accounts
- **Multer** – File upload handling for resumes/CVs
- **Nodemailer** – Service for sending email notifications
- **Morgan** – HTTP request logger middleware
- **Dotenv** – Manages environment variables securely

---

## 📋 Setup Instructions

### 1. Clone the repository:
git clone https://github.com/yourusername/hh.kz.git
cd hh.kz

2. Install dependencies:
npm install

3. Set up environment variables:
Create a .env file in the root directory:
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password

4. Run database migrations:
npx sequelize-cli db:migrate

5. Seed the database (optional):
npx sequelize-cli db:seed:all

6. Start the server:
npm start
Now the server is running at http://localhost:3000.

💻 API Endpoints
1. POST /auth/register
Description: Register a new user.
Body: { "email": "user@example.com", "password": "securepassword" }
2. POST /auth/login
Description: Login with email and password to get a JWT token.
Body: { "email": "user@example.com", "password": "securepassword" }
3. GET /jobs
Description: Retrieve all job listings.
4. POST /jobs
Description: Create a new job listing (authentication required).
Body: { "title": "Job Title", "description": "Job description" }
5. GET /jobs/:id
Description: Get details of a specific job listing.
6. PUT /jobs/:id
Description: Update a job listing (authentication required).
7. DELETE /jobs/:id
Description: Delete a job listing (authentication required).


📧 Email Notifications
This application uses Nodemailer to send automated emails for:
Registration confirmation
Job posting confirmation
Other user interactions
Example Email:


🙏 Acknowledgements
Node.js - JavaScript runtime
Express.js - Web framework
Sequelize - ORM for PostgreSQL
Passport.js - Authentication middleware
JWT - Secure authentication method
