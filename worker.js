// worker thread

function fibonaci(n) {
  if (n < 2) {
    return n;
  }
  return fibonaci(n - 1) + fibonaci(n - 2);
}

this.addEventListener("message", (message) => {
  const { data } = message;

  this.postMessage(fibonaci(data));
});
