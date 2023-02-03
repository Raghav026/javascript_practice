let i = 0;

const interval = setInterval(() => {
  if (i === 10) {
    stop();
  }
  console.log(i);
  i++;
}, 1000);

const stop = () => {
  clearInterval(interval);
};
