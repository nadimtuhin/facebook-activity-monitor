import async from 'async';
import random from 'lodash/random';

export default function during(condition, task) {
  setTimeout(() => {
    async.during(
      callback => callback(null, condition()),
      callback => {
        task();
        setTimeout(callback, random(4, 8) * 100);
      },
      err => console.log(err)
    );
  }, 1000);
}
