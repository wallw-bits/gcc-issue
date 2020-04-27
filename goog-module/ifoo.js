goog.module('IFoo');

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
};

exports = IFoo;
