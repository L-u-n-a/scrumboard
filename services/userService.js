/* global app */
app.service('userService', function () {
  var users = JSON.parse(localStorage.getItem('users'))

  if (users === null) {
    users = [
      {username: 'jan', password: 'test'},
      {username: 'gijs', password: 'gijs'},
      {username: 'luna', password: 'luna'}
    ]
  }

  this.login = function (username, password) {
    var login = false
    users.forEach(function (user) {
      if (user.username === username && user.password === password) {
        login = true
      }
    })
    return login
  }

  this.createUser = function (name, pass) {
    users.push({username: name, password: pass})
    localStorage.setItem('users', JSON.stringify(users))
  }

  this.getAllUsers = function () {
    return users
  }

  this.getUserNames = function () {
    var usernames = []
    users.forEach(function (e) {
      usernames.push(e.username)
    })
    return usernames
  }
})
