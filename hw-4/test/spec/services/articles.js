'use strict';

describe('Service: articles', function () {

  // load the service's module
  beforeEach(module('hw3App'));

  // instantiate service
  var articles;
  beforeEach(inject(function (_articles_) {
    articles = _articles_;
  }));

  it('should do something', function () {
    expect(!!articles).toBe(true);
  });

});
