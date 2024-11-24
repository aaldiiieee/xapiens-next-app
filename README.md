# Xapiens Next App

This project is a Next.js application featuring user authentication with **NextAuth.js**. It supports **Google OAuth** and **custom credentials-based login**.

## Features

- **Google OAuth Login** for seamless user authentication.
- **Custom Credentials Login** to authenticate with email and password.
- Protected routes using middleware.
- Modular and reusable components for UI forms.
- Session handling with NextAuth.js, supporting token-based authentication.
- **User List and Detail Pages**:
  - Responsive datatable for displaying user lists.
  - Dynamic user detail page fetching data from `https://reqres.in`.

---

## Tech Stack

- **Next.js**: Framework for React applications.
- **NextAuth.js**: Authentication solution for Next.js.
- **TypeScript**: For type-safe development.
- **Tailwind CSS**: Utility-first CSS framework for styling.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/aaldiiieee/xapiens-next-app.git
cd your-repository
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

```bash
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 4. Run the Development Server

```bash
npm run dev
```

