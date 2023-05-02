function displaySeconds() {
  let seconds = 0;
  setInterval(function () {
    seconds++;
    if (seconds % 60 === 0) {
      const minutes = seconds / 60;
      if (minutes === 1) {
        document.body.innerHTML = "1 minute has passed";
      } else {
        document.body.innerHTML = `${minutes} minutes have passed`;
      }
    } else {
      document.body.innerHTML = `${seconds} seconds have passed`;
    }
  }, 1000);
}
displaySeconds();
