const app = angular.module("SmittenApp", []);

app.controller("MainController", [
   "$http",
   function($http) {
      this.isEditing = false;
      this.isBrowsing = false;
      this.isViewingMatches = false;
      this.isCreatingDates = false;
      this.isViewingDates = false;
      this.profileIndexToShow = 0;
      this.matches = [];
      this.dates = [];

      this.createUser = () => {
         $http({
            method: "POST",
            url: "/users",
            data: {
               username: this.newUsername,
               password: this.newPassword
            }
         }).then(
            response => {
               this.newUsername = "";
               this.newPassword = "";
            },
            error => {
               console.error(error);
            }
         );
      };

      this.logIn = () => {
         $http({
            method: "POST",
            url: "/sessions",
            data: {
               username: this.username,
               password: this.password
            }
         }).then(
            response => {
               this.currentUser = response.data;
               this.username = "";
               this.password = "";
               this.isEditing = false;
               this.isBrowsing = false;
               this.isViewingMatches = false;
               this.isViewingDates = false;
               this.isCreatingDates = false;
               this.fetchProfiles();
            },
            error => {
               console.error(error);
            }
         );
      };

      this.logOut = () => {
         $http({
            method: "DELETE",
            url: "/sessions"
         }).then(
            response => {
               this.currentUser = undefined;
            },
            error => {
               console.error(error);
            }
         );
      };

      this.checkUser = () => {
         $http({
            method: "GET",
            url: "/sessions"
         }).then(
            response => {
               this.currentUser = response.data;
            },
            error => {
               console.error(error);
            }
         );
      };

      this.toggleEditing = () => {
         this.isEditing = !this.isEditing;
      };

      this.updateProfile = () => {
         const formData = {
            imgURL: this.imgURL || this.currentUser.imgURL,
            info: {
               age: this.age || this.currentUser.age,
               name: this.name || this.currentUser.name,
               height: this.height || this.currentUser.height,
               location: this.location || this.currentUser.location,
               bio: this.bio || this.currentUser.bio
            }
         };

         $http({
            method: "PUT",
            url: `/users/${this.currentUser._id}`,
            data: formData
         }).then(
            response => {
               this.currentUser = response.data;
               this.imgURL = "";
               this.age = "";
               this.name = "";
               this.height = "";
               this.location = "";
               this.bio = "";
               this.toggleEditing();
            },
            error => {
               console.error(error);
            }
         );
      };

      this.deleteProfile = () => {
         $http({
            method: "DELETE",
            url: `/users/${this.currentUser._id}`
         }).then(
            response => {
               this.currentUser = undefined;
            },
            error => {
               console.error(error);
            }
         );
      };

      this.toggleBrowsing = () => {
         this.isBrowsing = !this.isBrowsing;
      };

      this.fetchProfiles = () => {
         $http({
            method: "GET",
            url: `/users/`
         }).then(
            response => {
               this.userProfiles = response.data;
               const indexToRemove = this.userProfiles.findIndex(
                  profile => profile._id === this.currentUser._id
               );
               this.userProfiles.splice(indexToRemove, 1);
            },
            error => {
               console.error(error);
            }
         );
      };

      this.viewPrevProfile = () => {
         if (this.profileIndexToShow === 0) {
            this.profileIndexToShow = this.userProfiles.length - 1;
         } else {
            this.profileIndexToShow--;
         }
      };

      this.viewNextProfile = () => {
         this.profileIndexToShow =
            (this.profileIndexToShow + 1) % this.userProfiles.length;
      };

      this.startInterest = id => {
         this.currentUser.interested.push(id);
         $http({
            method: "PUT",
            url: `/users/${this.currentUser._id}`,
            data: { interested: this.currentUser.interested }
         });
      };

      this.stopInterest = id => {
         const indexToRemove = this.currentUser.interested.indexOf(id);
         this.currentUser.interested.splice(indexToRemove, 1);
         $http({
            method: "PUT",
            url: `/users/${this.currentUser._id}`,
            data: { interested: this.currentUser.interested }
         });
      };

      this.toggleViewingMatches = () => {
         this.isViewingMatches = !this.isViewingMatches;
      };

      this.viewMatches = () => {
         this.toggleViewingMatches();
         this.matches = [];
         for (let interest of this.currentUser.interested) {
            let index = this.userProfiles.findIndex(
               profile => profile._id === interest
            );
            if (
               this.userProfiles[index].interested.indexOf(this.currentUser._id) !== -1
            ) {
               this.matches.push(this.userProfiles[index]);
            }
         }
      };

      this.toggleCreateDates = () => {
         this.isCreatingDates = !this.isCreatingDates;
      };

      this.viewCreateDates = id => {
         console.log("View");
         console.log(id);

         this.toggleCreateDates();
      };

      this.createADate = (userID, imgURL, name, age, location) => {
         // Intrested Person
         console.log(`Intrested User ID: ${userID}`);
         console.log(`Intrested User Image URL: ${imgURL}`);
         console.log(`Intrested User Name: ${name}`);
         console.log(`Intrested User Age: ${age}`);
         console.log(`Intrested User Location: ${location}`);
         // Current User
         console.log(`Current User ID: ${this.currentUser._id}`);
         console.log(`Current User Image URL: ${this.currentUser.imgURL}`);
         console.log(`Current User Name: ${this.currentUser.info.name}`);
         console.log(`Current User Age: ${this.currentUser.info.age}`);
         console.log(`Current User Location: ${this.currentUser.info.location}`);

         // Date
         console.log(`Time: ${this.time}`);
         console.log(`Description: ${this.description}`);

         $http({
            method: "POST",
            url: "/dates",
            data: {
               // Current User
               currentUserID: this.currentUser._id,
               currentUserimgURL: this.currentUser.imgURL,
               currentUsername: this.currentUser.info.name,
               currentUserage: this.currentUser.info.age,
               currentUserlocation: this.currentUser.info.location,
               // Intrested Person
               intrestedUserID: userID,
               intrestedUserimgURL: imgURL,
               intrestedUsername: name,
               intrestedUserage: age,
               intrestedUserlocation: location,
               // Date
               time: this.time,
               description: this.description
            }
         }).then(
            response => {
               console.log(response);
            },
            error => {
               console.error(`Error: ${error}`);
            }
         );

         this.time = "";
         this.description = "";
      };

      this.toggleViewingDates = () => {
         this.isViewingDates = !this.isViewingDates;
      };

      this.viewDates = () => {
         this.toggleViewingDates();
         // this.dates = [];
         // for (let date of this.currentUser.dates) {
         //    // HERE
         // }
      };
   }
]);
