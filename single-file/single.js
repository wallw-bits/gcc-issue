goog.module('test');

/**
 * @interface
 * @template T
 */
class IFoo {
  /**
   * @param {T=} opt_obj
   * @return {T}
   */
  foo(opt_obj) {}
}

/**
 * @implements {IFoo}
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
}

console.log(new Bar().foo());
