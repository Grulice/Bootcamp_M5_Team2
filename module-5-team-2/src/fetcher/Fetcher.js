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

export function getStockPricesFor(codes) {
  return fetch(
    "https://financialmodelingprep.com/api/v3/company/profile/" +
      codes.join(",")
  )
    .then((res) => res.json())
    .then((res) =>
      res.companyProfiles.map((item) => {
        // console.log({ symbol: item.symbol, price: item.profile.price });
        return { symbol: item.symbol, price: item.profile.price };
      })
    );
}

// getStockPricesFor(["SPY", "MU", "NKE"]);
