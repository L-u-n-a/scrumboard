/* global angular */
angular.module('scrumboard-app').filter('userFilter', function (userService) {
  return function (input, project) {
    var users = userService.getUserNames()

    // Filter people already in the project
    for (var y = 0; y < project.participants.length; y++) {
      for (var i = 0; i < users.length; i++) {
        if (project.participants[y] === users[i]) {
          users.splice(i, 1)
        }
      }
    }

    return users
  }
})
