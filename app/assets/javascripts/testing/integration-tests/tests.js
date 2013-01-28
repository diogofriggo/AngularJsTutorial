describe('Phone list view', function() {

  beforeEach(function() {
    browser().navigateTo('../application/index');
  });

  describe('should filter the phone list as user types into the search box', function() {

    it('displays twenty items in the list', function(){
      expect(repeater('ul.phones li').count()).toBe(20);
    });

    it('if I filter by "nexus" it should display 1 item', function(){
      input('query').enter('nexus');
      expect(repeater('ul.phones li').count()).toBe(1);
    });

    it('if I filter by "motorola" it should display 2 items', function(){
      input('query').enter('motorola');
      //pause();
      expect(repeater('ul.phones li').count()).toBe(8);
    });

  });

  it('should display the current filter value within an element with id "status', function() {
    expect(element('#status').text()).toMatch(/Current filter: \s*$/);
    input('query').enter('nexus');
    expect(element('#status').text()).toMatch(/Current filter: nexus\s*$/);
    using('#status').expect(binding('query')).toBe('nexus');
  });

  it('should be possible to control phone order via the drop down select box', function() {
    //let's narrow the dataset to make the test assertions shorter
    input('query').enter('tablet');

    expect(repeater('.phones li', 'Phone List').column('phone.name')).
      toEqual(["Motorola XOOM\u2122 with Wi-Fi", "MOTOROLA XOOM\u2122"]);

    select('orderProp').option('Alphabetical');

    expect(repeater('.phones li', 'Phone List').column('phone.name')).
      toEqual(["MOTOROLA XOOM\u2122", "Motorola XOOM\u2122 with Wi-Fi"]);
  });

  it('should render phone specific links', function() {
    input('query').enter('nexus');
    element('.phones li a').click();
    expect(browser().location().url()).toBe('/phones/nexus-s');
  });

});