goog.module('Bar');
const IFoo = goog.requireType('IFoo');

/**
 * @implements {IFoo<Object>}
 */
class Bar {
  /**
   * @inheritDoc
   */
  foo(opt_obj) {
    opt_obj = opt_obj || {};
    opt_obj['type'] = 'Bar';
    return opt_obj;
  }
};

exports = Bar;
