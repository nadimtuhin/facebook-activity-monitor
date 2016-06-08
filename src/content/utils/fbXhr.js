export function fbParser(data) {
  return JSON.parse(data.replace('for (;;);', ''));
}

export function request(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve(xhr.responseText);
      } else {
        reject('req stat problem');
      }
    };

    xhr.onerror = function () {
      reject('There was a connection error of some sort');
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
  });
}

export default function fbXhr(url){
  return request(url).then(fbParser);
}
