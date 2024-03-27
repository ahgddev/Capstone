# Capstone
## Project
This repo is for my Capstone project, which is a major project showcasing my skills regarding utilizing React.js/React to create a front end application that retrieves data from an API I created.

## Project Overview
Plant Parent is an app where users can interact with other plant lovers! Users can view and share photos and posts of plants easily with friends.

## Requirements
- Built with HTML, CSS, JavaScript, REACT, and Redux Toolkit.
- Frequent commits to GitHub.
- A README.md file in your GitHub repository with:
    - Explanations of the technologies used.
    - Explanations of the approach taken.
    - Usage instructions, if relevant.
    - Unsolved problems.
    - etc.
- Use AJAX to make a request to an external data source like OMDBapi, and insert some of the data retrieved into the DOM.
- Utilize useEffect and useState React Hooks.
- Must Make use of React-Router-Dom and have 2 (or more pages)
- Stylized CSS
- Effort displayed

## Tools Used
VSCode, React, axios, mongoose, mongoDB Atlas

## Coding Languages used
HTML, CSS, Javascript (vanilla) 

## User Data
All image data was taken from unsplash. 

## Usage Instructions
### Starting the app
Start by git cloning this repo.

```
git clone -this-repo
```

Change to the data folder and use the following commands,

```
npm i
nodemon server.mjs
```
Now open another terminal and open the front end folder. Run the following commands.

```
npm i
npm run dev
```

To search for items in the database, you must utilize a String. The database can search for partial words (Chick will bring up Chicken dishes/products).
Each card comes with a favorites button, which will save data from the database and store it to a state that shows all of your favorites in the Favorites page.
