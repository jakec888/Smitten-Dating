# Smitten Dating App

<p align="center">
<img src="smitten.gif" />
</p>

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

### Partners

[Jake C](https://github.com/jakec888)
[Vincent G](https://github.com/vincentgu818)
