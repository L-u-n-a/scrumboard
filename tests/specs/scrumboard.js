'use strict';

describe('Test the testing', function () {
  var userFilter, columnFactory, userService
  beforeEach(function () {
    module('ngCookies')
    module('scrumboard-app')
    inject(function ($filter, _columnFactory_, _userService_) {
      userFilter = $filter('userFilter')
      userService = _userService_
      columnFactory = _columnFactory_
    })
  })
  it('check getAllColumns', function () {
      var mockColumns = [
        {id: 1, projectID: 1, name: 'ToDo', tasks: []}
      ]
      var columnArray = columnFactory.getAllColumns()
      for (var i = 0; i < mockColumns.length; i++) {
        expect(columnArray[i].name).toBe(mockColumns[i].name)
      }
  })
  it('create a new column', function () {
    columnFactory.createColumn(1, 'test')
    var columns = columnFactory.getAllColumns()
    expect(columns.length).toBe(2)

  })
  it('succesful login', function () {
    expect(userService.login('jan', 'test')).toBeTruthy()
  })
  it('Should fail to login', function () {
      expect(userService.login('jan', '1')).toBeFalsy()
  })
  it('Should get all users', function () {
      var mockUsers = [
          {username: 'jan', password: 'test'},
          {username: 'gijs', password: 'gijs'},
          {username: 'luna', password: 'luna'}
      ]
      var firstUser = userService.getAllUsers()
      for (var i = 0; i < mockUsers.length; i++) {
        expect(firstUser[i].username).toBe(mockUsers[i].username)
      }
  })
  it('Should create a new user', function () {
    userService.createUser('test', 'test')
    expect(userService.getAllUsers().length).toBe(4)
  })
  it('Should get all the columns belonging to one project', function () {
    columnFactory.createColumn(2, 'boer')
    columnFactory.createColumn(3, 'vrouw')

    expect(columnFactory.getColumnByProject(2)[0].name).toBe('boer')
    expect(columnFactory.getColumnByProject(3)[0].name).toBe('vrouw')
  })
  it('Should get the usernames of all users', function () {
    var names = ['jan', 'gijs', 'luna']
      for (var i = 0; i < names.length; i++) {
        expect(userService.getUserNames()[i]).toBe(names[i])
      }
  })
})