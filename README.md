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
├── main.jsx
├── index.css
├── ThemeContext.jsx
│
├── routes/
│   └── NavBar.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Contacts.jsx
│   └── NotFound.jsx
│
└── components/
    ├── Button.jsx
    ├── Card.jsx
    └── Footer.jsx
```

## Making a copy

Copy this folder from the file
npm install
npm install bootstrap

## Structure

components/      -> repeatable blocks to be reuseed, already have a structure & a style in css
pages/           -> the pages for the website which match with the navbar (consistent across all pages)
routes/          -> design for the navbar at the top of the page for navigation

main.jsx         -> loads all of the components & displays them on the page
index.css        -> css styling
ThemeContext.jsx -> controls the dark/light theme

## Making changes

This section covers changing the website design using this template

### Bootstrap

This is styled in bootstrap, so use the containers already set up or make new ones

### Root scheme

In index.css, the colours & sizing are set up to use variables
Most are dynamically assigned to colouring & sizing, so change them only once
Except for some specific sizing & colours

### Pages

Create new pages as needed in the pages/ directory
Or just manually change the names of the files, functions & whereever they've been imported

## Boxes design

To keep a consistent style, I've created Card.jsx
This acts as a container for text/forms/etc...

Create the bootstrap structure: div for container, then row, then column
Then within the <div className="col-md-4"> place the <Card>

This keeps a consistent format & style across the whole project