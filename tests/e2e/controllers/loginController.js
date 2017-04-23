describe('E2E: Test the login page.', function () {

  beforeEach(function () {
    browser.get('http://localhost:8080/#/login')
  })

  it("Should find the label with id #username", function () {
    // login
    element(by.model('username')).sendKeys('jan')
    element(by.model('password')).sendKeys('test')
    element(by.id('login')).click()
    // create a new project
    element(by.model('newProject.name')).sendKeys('test')
    browser.sleep(2000)
    element(by.id('createProject')).click()
    browser.sleep(1000)
  })
})
