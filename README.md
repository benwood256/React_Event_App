# React + Vite template for desiging a website

## Features

- ️React
-  Vite
-  React Router
-  Dark / Light theme
- ️Bootstrap
-  Reusable components
-  Responsive layouts
-  Centralised CSS colour variables
-  Navigation between pages
-  404 Not Found page
-  Reusable footer
-  Basic animations

## Project Structure

```text
src/
├── components/
│   ├── Button.jsx
│   ├── EventCard.jsx
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
├── context/
│   ├── AuthContext.jsx
│   └── EventContext.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── Event.jsx
│   ├── Help.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   └── Register.jsx
├── ThemeContext.jsx
├── index.css
└── main.jsx
```

## main display

### main.jsx

I don't need an App.jsx because I'm handling displaying the pages using: const router = createBrowserRouter([])
This means I'm using the router to determine which page should be displayed, instead of outsourcing to the App.jsx

### index.css

Handling the styling & positing of elements

### ThemeContext.jsx

This is handling the theme of the pages, this has 2 exports: ThemeProvider & ThemeContext

ThemeProvider -> contains the theme state & tracks (useState) when theme changes
ThemeContext  -> allows components to access the theme state & the setTheme function

The ThemeProvider is set in the main.jsx, meaning everything can access it (because all the pages are rendered by the Router)
The ThemeContext is imported by each 'pages/' page, so they can access the function to set the theme
                    which can be used on the 'button' which when clicked sets the theme
