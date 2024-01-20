(() => {
  const _reduced = (f: Function, g: Function) => (arg: any) => g(f(arg));
  const pipe = (...fns: Function[]) => fns.reduce(_reduced);

  const sumTwo = (n: number) => n + 2;

  const multiplyTwo = (n: number) => n * 2;

  const exponentialTwo = (n: number) => n ** 2;

  const moduleByTwo = (n: number) => n % 2;

  // tentar implementar esse caso
  // pipe("%20", decodeURI);

  pipe(sumTwo, exponentialTwo, console.log)(0);
})();
