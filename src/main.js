import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyExchanger from './currencyexchange-service';

//BUSINESS LOGIC
function displayNewCurrency(response, id, USD) {
  console.log("here " + response.message);
  if (response.message === "Error") {
    $('.conversion').text(`There was a server ${response.message}`);
  } else if (!(id in response.conversion_rates)) {
    $('.conversion').text("error not a real currency");
  } else {
    $('.conversion').text(`Converted Money : ${USD * response.conversion_rates[id]}` + " " + id);
  }
}

//UI LOGIC
$(document).ready(function () {
  $('.btn-success').click(function () {
    let id = $('#currencyType').val();
    let USD = $('#usd').val();
    CurrencyExchanger.getNewCurrency()
      .then(function (response) {
        displayNewCurrency(response, id, USD);
      });
  });
});