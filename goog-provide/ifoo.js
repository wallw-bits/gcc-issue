goog.provide('IFoo');

/**
 * @interface
 * @template T
 */
IFoo = class {
  /**
   * @param {T=} opt_obj
   * @return {T}
   */
  foo(opt_obj) {}
};
