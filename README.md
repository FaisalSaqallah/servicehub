# ServiceHub - Admin & Customer Management Panel

A Single Page Application (SPA) built with Angular that allows administrators to manage services, customers, and appointments, while customers can browse services and request appointments.

---

##  Mocked Authentication

Authentication is mocked and protected using Angular Route Guards.

---

##  Setup Instructions

1. **Clone the repository**

git clone https://github.com/FaisalSaqallah/servicehub.git
cd servicehub

2. **Install dependencies**

npm install

3. **Start the Angular app**

ng serve

4. **Run json-server (mock API)**

npm run json-server

---

## 🌐API Endpoints (json-server)

These endpoints are served via `http://localhost:3000`

### Services
- GET /services — list all services
- POST /services — add new service
- PUT /services/:id — update a service
- DELETE /services/:id — delete a service

### Customers
- GET /customers — list all customers
- POST /customers — add new customer
- PUT /customers/:id — update customer info
- DELETE /customers/:id — remove a customer

### Appointments
- GET /appointments — list all appointments
- POST /appointments — book a new appointment
- PUT /appointments/:id — update appointment status or info
- DELETE /appointments/:id — cancel/delete an appointment

---

## Features Implemented

### Admin
- Dashboard with styled navigation bar
- Manage services with full CRUD (Reactive Forms)
- Manage customers with full CRUD (Reactive Forms)
- Manage appointments and update their status
- All data integrated via json-server API

### Customer
- View services and their details
- Filter and search services (if implemented)
- Book appointments (date + time)
- View appointment history with status

---

##  Tech Stack

- Angular 16 (Standalone Components)
- SCSS for styling
- json-server (mock backend)
- Reactive Forms
- Route Guards for auth

---

##  Author

Made by **Faisal Saqallah** for the Senior Angular Frontend Developer Challenge.
