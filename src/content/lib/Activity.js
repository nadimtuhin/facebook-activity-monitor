export default function (delay, msg = 'user is editing') {
  let lastCallTime = new Date();

  return () => {
    return new Promise((resolve, reject) => {
      lastCallTime = new Date();

      function check () {
        const elapsedTime = new Date() - lastCallTime;
        if (elapsedTime < delay) {
          return reject(msg);
        }

        return resolve();
      }

      setTimeout(check, delay); // end timeout
    });
  };
}
