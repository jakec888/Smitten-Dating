const app = angular.module("SmittenApp", []);

app.controller("MainController", [
   "$http",
   function($http) {
      this.isEditing = false;
      this.isBrowsing = false;
      this.profileIndexToShow = 0;

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
               this.imgURL = '';
               this.age = '';
               this.name = '';
               this.height = '';
               this.location = '';
               this.bio = '';
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
            url: `/users/${this.currentUser._id}`,
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
            url: `/users/`,
         }).then(
            response => {
               this.userProfiles = response.data;
               const indexToRemove = this.userProfiles.findIndex(profile => profile._id === this.currentUser._id)
               this.userProfiles.splice(indexToRemove, 1)
            },
            error => {
               console.error(error);
            }
         );
      };

      this.viewPrevProfile = () => {
        if(this.profileIndexToShow === 0) {
          this.profileIndexToShow = this.userProfiles.length - 1;
        } else {
          this.profileIndexToShow--;
        }
      };

      this.viewNextProfile = () => {
        this.profileIndexToShow = (this.profileIndexToShow+1)%this.userProfiles.length;
      };

   }
]);
