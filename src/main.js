import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyExchanger from './currencyexchange-service';

//BUSINESS LOGIC
function displayNewCurrency(response, id, USD) {
  if (!(id in response.conversion_rates)) {
    $('.conversion').text("error not a real currency")
  }
  else if (response.conversion_rates) {
    $('.conversion').text(`Converted Money : ${USD * response.conversion_rates[id]}` + " " + id)
  } else {
    $('.conversion').text("error" + response)
  }
}

//UI LOGIC
$(document).ready(function () {
  $('.btn-success').click(function () {
    let id = $('#currencyType').val()
    let USD = $('#usd').val()
    CurrencyExchanger.getNewCurrency()
      .then(function (response) {
        displayNewCurrency(response, id, USD)
      })
  });
});