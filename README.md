# Smitten Dating App

## [Visualization of Models](https://embed.coggle.it/diagram/XF2xTdGoMaOXEI7M/4a25f54331fed3b9886a164ce2369d8d2cdc25a2d3f9ae833744c47feb73f1df)

## User Stories
As a user, I would like access to my account to be secured by an encrypted password.
As a user, I would like to edit my profile.
As a user, I would like to browse the profiles of other users.
As a user, I would like to express my interest in other users.
As a user, I would like to know if users that I am interested in are interested in me back.
As a user, I would like to plan dates with users I am interested in and who are interested in me.
As a user, I would like to reject or cancel dates.

## Technologies Used
The application utilizes a MEAN technology stack---MongoDB database, Express server, AngularJS front end, Node.js. Bcrypt is used to encrypt passwords used for authentication.

## The Approach Taken
The user profiles were implemented as an API with a full set of CRUD routes in the back end. AJAX calls are used to allow the user to engage with the database. Straightforward, editing, deleting and browsing functionality follows. To implement the interest matching an array of user IDs of users you are interested in is kept. Logic is applied to check if those users have your user ID in their interested arrays. Dates represent a second model with partial CRUD functionality.

## Unsolved Problems

### Preferences
Presently, there is no ability to specify dating preferences (e.g. M seeking M, M seeking F, F seeking M/F, etc.). This is an important future feature to implement.

### Search Radius
Filtering matches to be within a specified radius from the user would be a useful feature.

### Google Maps
The Google Maps API can be brought in to embed maps for dates.



## Pages

-  Browse Page
   -  lists of single people
-  Intrested Page
   -  lists people you mutually intrested in
-  Dates Page
   -  list of google maps of all your dates and location

## Things To Do

-  Create .env
-  CRUD Dates
-  Angular Frontend Partials
   -  Dates

## Things in Progress

-  Angular Frontend Partials
   -  Interested

## Things implemented

-  Authentication
   -  Session
   -  Signup
      -  Encryption
   -  Login
   -  Login Frontend
-  CRUD User
-  Angular Frontend Partials
   -  Browse

### Updates

Friday 6P Eastern (Vincent)

-  authentication implemented
-  angular controllers split by functionality
-  code accidentally pushed to master without going through dev
-  planning to work on CRUD User next

Monday Night Update (Jake)

- Finished all routes
- Angular's way of displaying data gave me lots of problems.
- Dates.js (Controller) Line number 86, displays all dates but I can't seem to retrieve by Id so I can get back that date's specific data

#### Code Snippets

```
router.get("/browse", (req, res) ={
  const listOfIntrestUsers = currentUser.IntrestedPeople;
  let intrestedUsers = [];

  for (let index = 0; index < listOfIntrestUsers.length; index++) {
     const instredUserID = listOfIntrestUsers[index];
     Bookmark.findById(instredUserID, (err, foundUser) ={
        if (foundUser.IntrestedPeople.indexOf(currentUser.id != -1)) {
           intrestedUsers.push(foundUser);
        }
     });
  }

  res.json(intrestedUsers);

  Bookmark.findById(req.params.id, (err, removedBookmark) ={
     res.json(removedBookmark);
  });
});
```

```
let a = "Hello";
// undefined

a
// 'Hello'

let height = "" || "Jake";
// undefined

height
// 'Jake'

```
