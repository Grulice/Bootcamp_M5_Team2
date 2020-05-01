//Функция запроса баланса
export function getUserBalance() {
  return fetch(
    "https://5e8da89e22d8cd0016a798db.mockapi.io/users/2"
  ).then((res) => res.json());
}

//Функция смены баланса пользователя
export function changeBalance(newSumm) {
  fetch("https://5e8da89e22d8cd0016a798db.mockapi.io/users/2", {
    method: "PUT",
    body: JSON.stringify({
      id: "2",
      name: "Team two",
      currentBalance: newSumm,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

//Функция запроса к серверу акций
export function getStockData() {
  return fetch(
    "https://financialmodelingprep.com/api/v3/company/stock/list"
  ).then((res) => res.json());
}

//Функция получения списка акций пользователя
export function getUserStocks() {
  return fetch(
    "https://5e8da89e22d8cd0016a798db.mockapi.io/users/2/stocks"
  ).then((res) => res.json());
}

//Функция добавления данных в список акций
export function addNewStock(obj) {
  fetch("https://5e8da89e22d8cd0016a798db.mockapi.io/users/2/stocks", {
    method: "POST",
    body: JSON.stringify({
      code: obj.symbol,
      name: obj.name,
      purchasePrice: obj.price,
      amount: obj.pieces,
      totalPrice: obj.pieces * obj.price,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const chunkArray = (myArray, chunk_size) => {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    const myChunk = myArray.slice(index, index + chunk_size);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
};

export function getStockPricesFor(codes) {
  if (codes.length === 0) return Promise.resolve([]);
  const chunkedCodes = chunkArray(codes, 10);
  const fetches = [];
  for (const chunk of chunkedCodes) {
    let codesString = chunk.join(",");
    fetches.push(
      fetch(`https://financialmodelingprep.com/api/v3/quote/${codesString}`)
    );
  }

  return Promise.all(fetches)
    .then((fetchResults) => {
      const results = [];
      fetchResults.forEach((res) => {
        results.push(res.json());
      });
      return Promise.all(results);
    })
    .then((res) => {
      return res.reduce((arr, row) => {
        return arr.concat(row);
      }, []);
    })
    .then((res) => {
      const final = res.map((item) => {
        return { symbol: item.symbol, price: item.price };
      });
      return final;
    });

  // return fetch(`https://financialmodelingprep.com/api/v3/quote/${codesString}`)
  //   .then((res) => res.json())
  //   .then((res) =>
  //     res.map((item) => {
  //       return { symbol: item.symbol, price: item.price };
  //     })
  //   );
}
