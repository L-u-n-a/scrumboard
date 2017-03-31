describe('E2E: Test the login page.', function () {

  beforeEach(function () {
    browser.get('http://localhost:8080/#/login')
  })

  // it('should display the text: Username.', function () {
  //
  //   expect(element(by.id('username')).getText()).toBe("Username")
  //   //var label = element(by.css('b#username'))
  //   //var lText = label.getText()
  //
  //   //expect(lText).toBe('Username')
  // })

  it("should list a terms of service, privacy policy ", function () {
    var username = element(By.css('.username'));

    browser.wait(function (){
      username.isPresent()
    },

    500, "Element NOT found");
    expect(username.getText()).toContain('Username')
  })

  it("Should say hello", function () {
    expect(element(by.tagName('span')).getText()).toBe("hello");
  })

  // it('should display a different status text after button click', function() {
  //
  //   element(by.tagName('button')).click();
  //
  //
  //   expect(element(by.tagName('p')).getText()).toEqual('Done!');
  // });
  //
  // it('should display a hellow message when the form is submitted', function() {
  //
  //   element(by.model('name')).sendKeys("Dominic");
  //
  //   element(by.css('button#form-submit')).click();
  //
  //   expect(element(by.tagName('span')).getText()).toBe("Hellow Dominic");
  // });
  //
  // it('should display a list of todo items', function() {
  //   var rows = element.all(by.repeater('item in items')).count();
  //   expect(rows).toBe(3);
  // });

});
