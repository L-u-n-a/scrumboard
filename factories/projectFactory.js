/* global app */
app.factory('projectFactory', function () {
  var projects = [
    {id: 1, name: 'testProject', participants: ['jan']}
  ]

  function getAllProjects () {
    return projects
  }

  function getProjectsByUser (username) {
    var userProjects = []
    projects.forEach(function (e) {
      for (var i = 0; i < e.participants.length; i++) {
        if (e.participants[i] === username) {
          userProjects.push(e)
        }
      }
    })
    return userProjects
  }

  function createProject (pname, pParticipants) {
    projects.push({id: projects.length + 1, name: pname, participants: pParticipants})
  }

  return {
    getAllProjects: getAllProjects,
    createProject: createProject,
    getProjectsByUser: getProjectsByUser
  }
})
