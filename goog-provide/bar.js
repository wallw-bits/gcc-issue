goog.provide('Bar');
goog.require('IFoo');

/**
 * @implements {IFoo}
 */
Bar = class {
  /**
   * @inheritDoc
   */
  foo(opt_obj) {
    opt_obj = opt_obj || {};
    opt_obj['type'] = 'Bar';
    return opt_obj;
  }
};
