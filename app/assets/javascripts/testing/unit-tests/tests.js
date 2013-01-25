describe('PhoneListController', function(){
  var scope, ctrl, $httpBackend;

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('../data/phones.json').
      respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

    scope = $rootScope.$new();
    ctrl = $controller(PhoneListController, {$scope: scope});
  }));

  it('should create "phones" model with 2 phones', function() {
    $httpBackend.flush();
    expect(scope.phones.length).toBe(2);
  });

  it('should set the default value of orderProp model', function() {
    expect(scope.orderProp).toBe('age');
  });

  it('should create "phones" model with 2 phones fetched from xhr', function() {
    expect(scope.phones).toBeUndefined();
    $httpBackend.flush();

    expect(scope.phones).toEqual([{name: 'Nexus S'},
      {name: 'Motorola DROID'}]);
  });

  it('should set the default value of orderProp model', function() {
    expect(scope.orderProp).toBe('age');
  });
});