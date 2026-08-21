# A React+Vite app for users to register/login & then add, update or delete events that are displayed on their dashboard

## Project Structure

```text
src/
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Footer.jsx
│   └── Navbar.jsx
├── context/
│   ├── AuthContext.jsx
│   ├── EventContext.jsx
│   └── ThemeContext.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── Event.jsx
│   ├── Help.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   └── Register.jsx
├── index.css
└── main.jsx
```

## /src/

### main.jsx

I don't need an App.jsx because I'm handling displaying the pages using: const router = createBrowserRouter([])
This means I'm using the router to determine which page should be displayed, instead of outsourcing to the App.jsx

### index.css

Handling the styling & positing of elements

## /src/components

Here contains all the reuseable code blocks needed for functionality

### Button.jsx

Button component -> instead of recreating & styling each time I need a <button> element

### Card.jsx

Displaying information in a box, in a consistent layout

### Navbar.jsx

Creates the bar that appears at the top of a page with links
Loaded into each page so it's consistent across every page

### Footer.jsx

A default footer that is loaded into each page

## /src/context

Contains files for shared application state -> to check whether a user is logged in or event data

### AuthContext.jsx

Remembers whether a use is logged in or not

### EventContext.jsx

Provides functions for creating, editing, retrieving & deleting events

### ThemeContext.jsx

This is handling the theme of the pages, this has 2 exports: ThemeProvider & ThemeContext

ThemeProvider -> contains the theme state & tracks (useState) when theme changes
ThemeContext  -> allows components to access the theme state & the setTheme function

The ThemeProvider is set in the main.jsx, meaning everything can access it (because all the pages are rendered by the Router)
The ThemeContext is imported by each 'pages/' page, so they can access the function to set the theme
                    which can be used on the 'button' which when clicked sets the theme

## /src/pages

This contains all the pages that will be displayed on the NavBar as a clickable link
Each will have it's own url (i.e. <url>/Dashboard) & page

### Dashboard.jsx

Main page which displays the events for a user (or a guest)

### Event.jsx

Displays the page to edit, delete or create a new event

### Help.jsx

The page to explain how the website works

### Login.jsx

Here, a user can log into their account

### NotFound.jsx

If someone enters a url after the http://localhost:5173 that doesn't exist, this page will appear
This is instead of a generic/blank 404 page

### Register.jsx

Here, a user can register their account


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