export default class CurrencyExchanger {
  static getNewCurrency(){
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
    .then(function(response) {
      if (!response.ok) {
        console.log(response)
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return Error(error);
    })
  }
}