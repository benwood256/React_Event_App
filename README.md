# A React+Vite app for users to register/login & then add, update or delete events that are displayed on their dashboard

The GitHub link: https://github.com/benwood256/Temporary_react_app

## Functionality

### Register & Login

Currently, the first name from 'Register' is stored, this is then used to display the 'Welcome firstName', on the dashboard.
At present, there is no need to store the rest of the user's information.
This is not persistent storage, if the website is reloaded it will be lost.

I would need a database (back-end) or use localStorage to save the user information across sessions.

### Context

This directory contains the .jsx files used to maintain context.
This involving using the createContext react element, which can be assigned to a variable, so other pages can access certain data immediately.
For example, if on the events page I change the theme to 'light', all the pages receive the data required to make this change.

#### AuthContext.jsx

createContext is used to create a react object that stores if the user is logged in or not called AuthContext.
ThemeProvider is the function made that determines what data is stored, by creating the variable 'user' & the function to change user called 'setUser'.
Then, the user & setUser are passed to useState(), so they will trigger a rerendered of the page if they change (i.e. they are tracked by React).
You then return: Auth.Provider -> You pass this with any props which are needed by the components (i.e. user & setUser become props & are passed back to the components to be used, so in the Dashboard I can import the user & pass it to my h1 element to display the logged in users name).
{children} represents the components that can access this, which becomes all the pages as the router in stored within <AuthProvider> which contains all the pages.

#### EventContext.jsx

Creating the variables event & setEvent & storing the data in here as context, then the dashboard & events page can retrieve the events created & display them.
You create the const events for the dashboard to simply display each object in the event array.
You create the const events & setEvents for the event page, so you can display the events name in the list & so you can create new events here.

#### ThemeContext.jsx

createContext is used so I can make a react object that can pass the currently value of the theme to components
The themeprovider is made, so this can store the theme & pass the theme to its children, this then wraps around <RouterProvider> so all the pages have the context.
Each page has its className={`app ${theme}`} -> this means its passed the word light or dark.
Then in index.css the colours of the page are set with either .app light & .app dark to change the display.

### pages

Here, each individual component displays a different page that can be swapped to using the navbar present at the top of each page

#### Dashboard

'navigate' is created with useNavigate() so that when the 'events' button is clicked, it takes you to the 'events' page.
'user' is created with useContext(AuthContext) so that in the header it will display the user.firstName if the users logged in
'events' is created with useContext(EventContext) to retrieve the events populated in the 'Events.jsx' panel

The events are displayed using JavaScript, which you can insert in a .jsx file if they're within curly brackets {}
? : allows you to choose between 2 things -> its essentially an if statement: **{statement (if true, run this code ) : (if false run this code)}**
Here if their are no events display the text, if there are events, populate the display page with them

**events.map((event, index => (code))** 
events -> the retrieved array of events from EventContext (created in the Events.jsx page 'add event')
.map() -> goes through every item in an array
event  -> this can be named anything (little confusing here as its created in the .map() call & isn't related to the 'events' array
          its assigning the name 'event' to each individual object in the array (i.e. [1, 2, 3] -> going through the array, pulling the 1st item, it would pass 1 to the code called 'event', event = {1} or event = {Name: "Basketball"} for this example)
index  -> the current index of the array (i.e. event = {Name: "Basketball"} of index 0
(code) -> this displays each 'event' by listing the event name, then a horizontal line & then the date, time, description & location
This way, each event will be within it's own container (key={index} is used so I can track each event by it's order in the stack)

#### Events

The main function here creates 5 different variable & functions with useState, so the typed out input of the event can be tracked (i.e. name, setName, date, etc...)
The events & setEvents are created using useContext(EventContext) so I can track the context of the events so other pages can have access imediately to any cchange of event (i.e. deleted, created or updated an event)
editIndex & setEditIndex are created with useState(null) so I can change & track an event using its assigned index
handleAddEvent() function is created so I can create a new object everytime I add an event & it swaps to edit an event if the edit button is clicked (using the newly made & tracked editIndex & setEditIndex -> the if statement checks if editIndex is null to decide if it provides functionality for the Add Event or Update Event)
deleteEvent(index) function -> functionality to delete an event by passing the events assigned index (index is assigned using handleAddEvent to each event object)
editEvent(index) function   -> functionality to edit an event by passing the events index

#### Others

The majority of the functionality was in the Events.jsx & Dashboard.jsx, other pages have comments stating clearly how they work

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