/* global app */
app.factory('projectFactory', function () {
  var projects = []

  function getAllProjects () {
    return projects
  }

  function createProject (pname) {
    projects.push({id: projects.length + 1, name: pname})
  }

  return {
    getAllProjects: getAllProjects,
    createProject: createProject
  }
})
