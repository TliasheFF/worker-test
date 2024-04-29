// main thread

document.forms[0].addEventListener("submit", (event) => {
  event.preventDefault();

  const resultElem = event.target.elements[1];
  const number = +event.target.elements[0].value;

  if (window.Worker) {
    const worker = new Worker("worker.js");

    worker.postMessage(number);

    worker.onmessage = (message) => {
      resultElem.value = message.data;
    };
  }
});
