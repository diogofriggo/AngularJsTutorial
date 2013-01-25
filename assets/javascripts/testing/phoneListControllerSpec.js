describe('PhoneListController', function(){
  it('should create "phones" model with 3 phones', function(){
    var scope = {},
        controller = new PhoneListController(scope);
    expect(scope.phones.length).toBe(4);
  })
});