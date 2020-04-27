This is a minimal reproduction of (what I think is) a Google Closure Compiler issue.

```
npm install
cd <one of the test folders>
npx google-closure-compiler $(cat gcc-args)
```

`single-file` and `goog-provide` work as expected (sort of: the Bar implementation
should probably explicitly `@implement {IFoo<Object>}`, but I thought the compiler
was inferring that). The `goog-module` version errors, even with the explicit
generic type. This may be related to [#3549](https://github.com/google/closure-compiler/issues/3549), but in this
case the `goog-provide` version works regardless of the given file order.
