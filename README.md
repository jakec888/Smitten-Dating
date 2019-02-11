# SAD

## [Mind Map](https://embed.coggle.it/diagram/XF2xTdGoMaOXEI7M/4a25f54331fed3b9886a164ce2369d8d2cdc25a2d3f9ae833744c47feb73f1df)

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
   - Dates

## Things in Progress
-  Angular Frontend Partials
   - Interested


## Things implemented
-  Authentication
   -  Session
   -  Signup
      -  Encryption
   -  Login
   -  Login Frontend 
-  CRUD User
- Angular Frontend Partials
   - Browse


### Updates
Friday 6P Eastern (Vincent)
- authentication implemented
- angular controllers split by functionality
- code accidentally pushed to master without going through dev
- planning to work on CRUD User next


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
