// inizio document ready..

$(document).ready( function() {

  // Creare un calendario dinamico con le festività.
  // Partiamo dal gennaio 2018 dando la possibilità di cambiare mese,
  // gestendo il caso in cui l’API non possa ritornare festività.
  // Il calendario partirà da gennaio 2018 e si concluderà a dicembre 2018 (unici dati disponibili sull’API).
  // Sarà indispensabile sia per la parte obbligatoria, che per quella facoltativa,
  // l’utilizzo di momentjs e dell’API holiday


// rappresento il primo MESE utilizzando un oggetto

var dataIniziale = moment( {

  day:  1,
  month: 0, // 0 = gennaio , 1 = febbraio (..)
  year: 2018,


});

// invoco la funzione per stampare tutti i giorni del mese

stampoGiorniMese(dataIniziale);

// invoca la funzione che aggiunge le festività

stampoGiorniFestivita(dataIniziale);



// ---- FUNZIONI -----



//  ------------   #1 stampoGiorniMese  ------------

function stampoGiorniMese (dataIniziale) {


  // Rendo il titolo dinamico

  $("h1").text(dataIniziale.format("MMMM YYYY"))

  // daysInMonth() calcola in automatico il numero di giorni di cui è composto il mese

  var giorniMese =  dataIniziale.daysInMonth();

  //
  // console.log(dataIniziale);
  // console.log('giorni del mese ' + giorniMese);


  //  stampo i giorni del mese utilizzando handlebars

  var source = $("#calendar-template").html() // utilizzo jquery
  var template = Handlebars.compile(source);


// inizio ciclo for
  for ( var i = 1; i <= giorniMese; i++ ) {

    var giornoCorrente = moment( {

      day: i,
      month: dataIniziale.month(),
      year: dataIniziale.year()

    })

    // console.log(giornoCorrente);


  // vado a riempire il template

    var context = {

      date: giornoCorrente.format( "D MMMM "),
      giorno_attr: giornoCorrente.format( "YYYY - MM - DD")

     };



    var html = template(context);
    // console.log(i);

  $("#listaGiorni").append(html);

  }
  // fine  ciclo for

}




//  ------------   #2 stampoGiorniFestivita  ------------


function stampoGiorniFestivita(dataInziale) {

  // Chiamo l'api con le festività
  // Aggiungo la classe ".festivita" alla data cui corrisponde una festività


  $.ajax (

    {
      url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
      method: "GET",
      data: {

        year: dataInziale.year(),
        month: dataInziale.month()


      },

      // se l'api viene caricato correttamente
      success: function(dataResponse) {

        // console.log(dataResponse);

        var holidays = dataResponse.response;


        for (var i = 0; i < holidays.length; i++) {

          var currentHolidays = holidays[i];
          console.log(currentHolidays);

        // $(".giorno")




          });

        }


      },
      // se l'api NON viene caricato correttamente

      error: function() {

        alert(" Attenzione, si è verificato un errore ")

      }


    });
}










});

// fine document ready..
