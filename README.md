# Event Management App

A React-based event management application built with Vite, allowing users to register, log in, and manage events through an interactive dashboard.

GitHub Repository: https://github.com/benwood256/Temporary_react_app

## Features

- **User Registration & Login** – Register new users and log in through the application.
- **Event Management (CRUD)** – Create, view, edit, and delete events.
- **Interactive Dashboard** – Display events in an organised dashboard layout.
- **Context API State Management** – Share authentication, event, and theme state across components using React Context.
- **Dark & Light Mode** – Switch between themes dynamically.
- **Reusable Components** – Modular UI components including buttons, cards, navigation, and footer.
- **Client-Side Routing** – Navigate between pages using React Router.
- **Form Handling** – Capture and manage user input when registering, logging in, and creating events.
- **Responsive UI** – Layout adapts to different screen sizes.
- **404 Error Page** – Custom page for handling invalid routes.
- **Help Page** – Provides guidance on using the application.

## Tech Stack

- React
- JavaScript (JSX)
- Vite
- React Router
- React Context API
- Bootstrap
- CSS

## Project Structure

```text
src/
├── components/    # Reusable UI components
├── context/      # Shared application state
├── pages/        # Application pages
├── index.css    # Global styling
└── main.jsx    # Application entry point
```

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/benwood256/React_Event_App.git
   ```

2. Navigate into the project directory:

   ```bash
   cd React_Event_App
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL provided by Vite in your browser.

## Usage

- Register an account or log in.
- Navigate to the dashboard to view events.
- Create new events with relevant details.
- Edit or delete existing events.
- Switch between light and dark themes.

## Running a Production Build

To generate a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```
