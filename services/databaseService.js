/**
* The purpose of this service is to handle the ajax (angular http service)
* requests that the scrumboard needs to execute.
*/

/* global app */
app.service('databaseService', function ($http) {
  this.newProject = function (name) {
    $http.post('php/crud-project.php?name=' + name)
    .then(function mySucces (response) {

    }, function myError (response) {
      console.log(response.statusText)
    })
  }
})
