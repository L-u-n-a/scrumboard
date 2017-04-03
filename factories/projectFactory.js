/* global app */
app.factory('projectFactory', function () {
  var projects = [
    {id: 1, name: 'testProject', participants: ['jan'], sprints: []}
  ]

  projects = JSON.parse(localStorage.getItem('projects'))

  function getAllProjects () {
    return projects
  }

  function getProjectById (id) {
    var project = {}
    projects.forEach(function (e) {
      if (e.id == id) {
        project = e
      }
    })
    return project
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
    projects.push({id: projects.length + 1, name: pname, participants: pParticipants, sprints: []})
    /* global localStorage */
    localStorage.setItem('projects', JSON.stringify(projects))
    console.log(projects)
  }

  return {
    getAllProjects: getAllProjects,
    createProject: createProject,
    getProjectsByUser: getProjectsByUser,
    getProjectById: getProjectById
  }
})
