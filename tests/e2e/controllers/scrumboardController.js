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
    // Create a new column
    element(by.model('newColumn.name')).sendKeys('Test')
    element(by.id('newColumnButton')).click()

    // Create a new sprint the task will be a part of.
    element(by.model('newSprint.name')).sendKeys('sprint 1')
    element(by.id('newSprintButton')).click()

    // Open the overlay for creating a new task.
    element(by.id('taskModelButton')).click()
    browser.sleep(1000)
    // Enter all of the neccecary information needed for creating a new task.
    element(by.model('newTask.ItemName')).sendKeys('test task')
    element(by.model('newTask.ItemBody')).sendKeys('task body')
    element(By.css('.new-item-sprint')).all(By.tagName('option')).get(1).click();

    // Click the button so the task is created.
    element(by.id('createNewTask')).click()

    // Check if the task has been created.
    expect(element(by.id('test task')).getText()).toContain('test task')
  })
})
