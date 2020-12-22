function tellerTekens(e) {
  var invoer, divTekens, teller;
  invoer = document.getElementById('bericht').value;
  divTekens = document.getElementById('divTekens');
  teller = (180 - (invoer.length));
  divTekens.textContent = teller + ' / 180';
}

el = document.getElementById('bericht');
el.addEventListener('keyup', tellerTekens, false);


$(document).ready(function () {
  $('#formulier').validate({
    submitHandler: function (form) {
      alert('Formulier wordt verzonden!');
      form.submit();
    },
    invalidHandler: function (form) {
      alert('Formulier is nog niet goed ingevuld, ga terug en probeer opnieuw.');
    }
  });
});
