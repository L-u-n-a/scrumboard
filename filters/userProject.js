/* global angular */
angular.module('scrumboard-app').filter('userFilter', function (userService) {
  return function (input, project) {
    var participant = userService.getUserNames()

    // Filter people already in the project
    for (var y = 0; y < project.participants.length; y++) {
      for (var i = 0; i < participant.length; i++) {
        if (project.participants[y] === participant[i]) {
          participant.splice(i, 1)
        }
      }
    }

    return participant
  }
})
