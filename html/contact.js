function tellerTekens(e) {
  var invoer, divTekens, teller;
  invoer = document.getElementById('subject').value;
  divTekens = document.getElementById('divTekens');
  teller = (180 - (invoer.length));
  divTekens.textContent = teller + ' / 180';
}

el = document.getElementById('subject');
el.addEventListener('keyup', tellerTekens, false);


$(document).ready(function() {
  $('#section').validate({
    submitHandler: function(form) {
      alert('Formulier wordt verzonden!');
      form.submit();
    },
    invalidHandler: function(form) {
      alert('Formulier is nog niet goed ingevuld, ga terug en probeer opnieuw.');
    }
  });
});
