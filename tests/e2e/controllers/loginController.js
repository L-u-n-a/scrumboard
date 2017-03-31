describe('E2E: Test the login page.', function () {

  beforeEach(function () {
    browser.get('http://localhost:8080/#/login')
  })

  it("Should find the label with id #username", function () {
    var username = element(by.id('username'))
    expect(username.getText()).toContain('Username')
  })
})
