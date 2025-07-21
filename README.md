# ServiceHub - Admin & Customer Management Panel

An Angular Single Page Application (SPA) that allows administrators to manage services, customers, and appointments. Customers can view services and request appointments.

---

## Authentication

- Login roles: **admin** & **customer** (mocked credentials)
- JWT-based (mock allowed)
- Route protection using **AuthGuard**

---

## Admin Features

- Dashboard with topbar navigation
- **Manage Services**: CRUD (name, description, price, category)
- **Manage Customers**: CRUD (name, email, phone, status)
- **Manage Appointments**: View & update status (Pending, Approved, Completed, Rejected)
- Reactive Forms with validation

---

## Customer Features

- Dashboard to browse & filter services
- Service detail view
- Book appointments with date & time
- View appointment history with statuses

---

## API Layer

- Powered by `json-server`
- Data stored in `db.json`

### API Endpoints

| Entity        | Endpoint                     |
|---------------|------------------------------|
| Services      | `http://localhost:3000/services` |
| Customers     | `http://localhost:3000/customers` |
| Appointments  | `http://localhost:3000/appointments` |

---

## Technical Stack

- Angular 16+
- Standalone Components & Lazy-loaded Modules
- SCSS Styling
- Custom service-based state management
- Route Guards for role-based access

---

## Setup Instructions

1. **Install dependencies**

```bash
npm install
