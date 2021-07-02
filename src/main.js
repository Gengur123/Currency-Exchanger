import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyExchanger from './currencyexchange-service';

//BUSINESS LOGIC
function displayNewCurrency(response, id, USD) {
  if (!(id in response.conversion_rates)) {
    console.log("error")
  }
  else if (response.conversion_rates) {
    $('.conversion').text(`Converted Money : ${USD * response.conversion_rates[id]}` + " " + id)
    console.log(response)
    console.log(response.conversion_rates[id])
  } else {
    console.log(response)
  }
}
//UI LOGIC
$(document).ready(function () {
  
  $('.btn-success').click(function () {
    let id = $('#currencyType').val()
    let USD = $('#usd').val()
    console.log(USD)
    CurrencyExchanger.getNewCurrency()
      .then(function (response) {
        displayNewCurrency(response, id, USD)
      })
  });
});