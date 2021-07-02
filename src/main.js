import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyExchanger from './currencyexchange-service';

$(document).ready(function () {
  $('.btn-success').click(function () {
    let id = $('#currencyType').val()
    console.log(id)
    CurrencyExchanger.getNewCurrency()
      .then(function (response) {
        console.log(response)
        if (response) {
          console.log(response)

        }
        });
      });
  });