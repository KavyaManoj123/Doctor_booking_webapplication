# 🏥 Doctor Booking Web Application

A comprehensive full-stack healthcare platform that bridges the gap between patients and healthcare providers through seamless online appointment booking and consultation management.

## 🌟 Overview

This modern web application revolutionizes healthcare accessibility by providing a dual-privilege system that caters to both patients and medical professionals. Built with cutting-edge technologies, it offers a secure, user-friendly interface for managing medical appointments and consultations.

## ✨ Key Features

### 👤 For Patients (Users)
- **Easy Registration & Authentication** - Secure account creation with profile management
- **Smart Appointment Booking** - Browse available doctors, specialties, and time slots
- **Appointment Management** - View, reschedule, or cancel upcoming appointments
- **Medical History** - Access past consultations and medical records
- **Search & Filter** - Find doctors by specialty, location, or availability

### 👨‍⚕️ For Doctors (Medical Professionals)
- **Professional Dashboard** - Comprehensive view of practice management
- **Patient Consultations** - Access patient information and consultation history
- **Appointment Control** - Accept, reschedule, or manage incoming appointments
- **Medical Records** - Maintain detailed patient records and treatment history
- **Profile Management** - Update qualifications, specialties, and contact information

## 🎯 Core Functionalities

### 🔐 Dual Privilege System
- **Role-based Access Control** - Separate interfaces and permissions for users and doctors
- **Secure Authentication** - JWT-based login system with role verification
- **Profile Management** - Customized dashboards for different user types


## 🛠️ Technology Stack

### Frontend
- **Framework**: React.js
- **Styling**: CSS3, Bootstrap
- **State Management**: Redux 
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 
- **Database**: MongoDB 
- **Authentication**: JWT (JSON Web Tokens)
- **API**: RESTful 

### Additional Tools
- **Version Control**: Git
- **Package Manager**: npm / yarn
- **Development**: Nodemon, Webpack
- **Testing**: Jest, Mocha

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB 
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KavyaManoj123/Doctor_booking_webapplication.git
   cd Doctor_booking_webapplication
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**
   Create `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/docterBooking
   ```

5. **Start the Application**
   ```bash
   # Start backend server
   cd backend
   npm start
   
   # Start frontend (in a new terminal)
   cd frontend
   npm start
   ```

6. **Access the Application**
   - Frontend: `http://localhost:5174`
   - Backend API: `http://localhost:4444`

## 📁 Project Structure

```
Doctor_booking_webapplication/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   └── App.js
│   └── public/
│
├── .gitignore
└── README.md
```

## 🔑 User Roles & Permissions

| Feature | Patient | Doctor | Admin |
|---------|---------|--------|-------|
| Book Appointments | ✅ | ❌ | ✅ |
| Manage Schedule | ❌ | ✅ | ✅ |
| View Medical Records | Own Only | Assigned Patients | All |
| User Management | ❌ | ❌ | ✅ |
| System Analytics | ❌ | Own Practice | All |

## 🎨 Screenshots

*Add screenshots of your application here showing:*
- Login/Registration page
- Patient dashboard
- Doctor dashboard
- Appointment booking interface


## 🚀 Future Enhancements

- [ ] Video consultation integration
- [ ] Mobile application (React Native / Flutter)
- [ ] Payment gateway integration
- [ ] Multi-language support
- [ ] AI-powered doctor recommendations
- [ ] Telemedicine features
- [ ] Prescription management
- [ ] Insurance integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Developer**: KavyaManoj123
- **GitHub**: [KavyaManoj123](https://github.com/KavyaManoj123)

## 📞 Support

For support, email kavyamanoj904@gmail.com or create an issue in this repository.

## 🙏 Acknowledgments

- Thanks to all healthcare professionals who inspired this project
- Open source community for amazing tools and libraries
- All contributors who helped improve this application

---

⭐ **Star this repository if you found it helpful!** ⭐

*Building the future of healthcare, one appointment at a time.*
