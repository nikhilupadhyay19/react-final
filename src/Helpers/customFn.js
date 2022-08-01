import { timeoutSec } from './config';

const timeout = (s) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(`Request is taking too long... More than ${s} seconds...`);
    }, s * 1000);
  });
};

export const getJson = async (url, errMsg = 'Something went wrong...') => {
  try {
    const res = await Promise.race([fetch(url), timeout(timeoutSec)]);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(`${errMsg} ${res.status} ${data.message}`);
    }
    return data;
  } catch (err) {
    throw err;
  }
};
