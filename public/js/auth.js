const app = angular.module("SmittenApp", []);

app.controller("AuthController", [
   "$http",
   function($http) {

     this.createUser = () => {
        $http({
          method: 'POST',
          url: '/users',
          data: {
            username: this.newUsername,
            password: this.newPassword
          }
        }).then(
          response => {
          console.log(response);
          this.newUsername = '';
          this.newPassword = '';
        }, error => {
          console.error(error);
        })
     }

     this.logIn = () => {
       $http({
         method: 'POST',
         url: '/sessions',
         data: {
           username: this.username,
           password: this.password
         }
       }).then(
         response => {
         this.currentUser = response.data
         this.username = '';
         this.password = '';
         console.log(this.currentUser);
       }, error => {
         console.error(error);
       })
     }

     this.logOut = () => {
       $http({
         method: 'DELETE',
         url: '/sessions',
       }).then(
         response => {
           this.currentUser = undefined
         },
         error => {
           console.error(error)
         }
       )
     }

     this.checkUser = () => {
       $http({
         method: 'GET',
         url: '/sessions'
       }).then(
         response => {
           this.currentUser = response.data
         },
         error => {
           console.error(error);
         }
       )
     }



   }
]);
