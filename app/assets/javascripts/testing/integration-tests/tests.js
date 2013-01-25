describe('Phone list view', function() {

  beforeEach(function() {
    browser().navigateTo('../application/index');
  });

  describe('should filter the phone list as user types into the search box', function() {

    it('displays three items in the list', function(){
      expect(repeater('ul.phones li').count()).toBe(3);
    });

    it('if I filter by "nexus" it should display 1 item', function(){
      input('query').enter('nexus');
      expect(repeater('ul.phones li').count()).toBe(1);
    });

    it('if I filter by "motorola" it should display 2 items', function(){
      input('query').enter('motorola');
      pause();
      expect(repeater('ul.phones li').count()).toBe(2);
    });

  });

  it('should display the current filter value within an element with id "status', function() {
    expect(element('#status').text()).toMatch(/Current filter: \s*$/);
    input('query').enter('nexus');
    expect(element('#status').text()).toMatch(/Current filter: nexus\s*$/);
    using('#status').expect(binding('query')).toBe('nexus');
  });


});