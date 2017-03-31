describe('Controller: scrumboard controller', function () {
  var filter

  beforeEach(function () {
    //Word voor elke test uitgevoerd.
    module('testApp.filters')

    inject(function ($filter) {
      filter = $filter('puntjesFilter')
    })
  })
  /*global it*/
  it('should add dots while string length is less then 20', function () {
    var input = 'Hello World!' // 12 chars
    var output = 'Hello World!........'

    expect(filter(input)).toBe(output)
  })

  it('should return string wen string is longer then 20 characcters', function () {
    var input = 'Goedemiddag World!!!' // 20 chars
    var output = 'Goedemiddag World!!!'

    expect(input).toBe(output)
  })

  it('should return 20 dots when the string is empty', function () {
    var input // empty string
    var output = '....................' // 20 characters

    expect(filter(input)).toBe(output)
  })
})
