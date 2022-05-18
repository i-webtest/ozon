"use strict";

const getData = () => {
  return fetch("https://ozon-d9bed-default-rtdb.firebaseio.com/goods.json").then((response) => {
    return response.json();
  });
};

export default getData;
