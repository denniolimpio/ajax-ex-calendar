// inizio document ready..

$(document).ready( function() {

  // Creare un calendario dinamico con le festività.
  // Partiamo dal gennaio 2018 dando la possibilità di cambiare mese,
  // gestendo il caso in cui l’API non possa ritornare festività.
  // Il calendario partirà da gennaio 2018 e si concluderà a dicembre 2018 (unici dati disponibili sull’API).
  // Sarà indispensabile sia per la parte obbligatoria, che per quella facoltativa,
  // l’utilizzo di momentjs e dell’API holiday

  $.ajax (

    {
      url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
      method: "GET",

      // se l'api viene caricato correttamente
      success: function(data) {

        console.log(data.response);

      },
      // se l'api NON viene caricato correttamente

      error: function() {

        alert(" Attenzione, si è verificato un errore ")

      }


    })

// FORMATO DATA (ANNO - MESE - GIORNO)


var start = moment("2018-01-01")
var giornoMese = moment(2).daysInMonth();

var day = start.format("D");
var month = start.format("MMMM");
var year = start.format("YYYY");

var span = $("span");

$(".anno").children(span).append(year);

$(".mese").children(span).append(month);



for (var i = 0; i <= giornoMese; i++ ) {

  $(".giorno > .giorniMese").append(" <li> " + [i + 1] + " </li>");


}


console.log(year)
console.log(day)
console.log(month)























});

// fine document ready..
