describe('E2E: Test the scrumboard page.', function () {

  beforeEach(function () {
    browser.get('http://localhost:8080/#/scrumboard')
  })

  it("Should create a new column", function () {
    element(by.model('newColumn.name')).sendKeys('Test')
    element(by.id('newColumnButton')).click()

    expect(element(by.css('.column-name')).getText()).toContain("Test")
  })

  it('Should create a column, then add a ticket to that column', function () {
    element(by.model('newColumn.name')).sendKeys('Test')
    element(by.id('newColumnButton')).click()

    expect(element(by.css('.column-name')).getText()).toContain("Test")

    element(by.id('taskModelButton')).click()
    browser.sleep(5000)
  })
})
