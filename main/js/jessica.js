$(document).ready(function(){
            if ($(".product-detail")[0]){
                
                $('.product-detail').after('<div class="extradetails">' + 
                    '<div class="product-detail">' + 
                    '  <div class="description">Bezorging: Thuisbezorgd</div>' + 
                    '  <div class="info">' + 
                    '    <div class="details"> Bestel op werkdagen voor 15.00uur en ontvang je sieraden morgen al thuis! Als jouw pakketje is ingepakt en klaar staat voor verzending ontvang je van ons een email met het track & trace nummer van DHL Parcel. Op deze manier kan je de bestelling zelf volgen. Vanaf &euro;19,98 verzenden wij je bestelling gratis, onder dit bedrag berekenen wij &euro;2,99 verzendkosten. </div>' + 
                    '  </div>' + 
                    '</div>' + 
                    '<div class="product-detail">' + 
                    '  <div class="header"></div>' + 
                    '  <div class="description">Retourneren: Terug sturen via de post</div>' + 
                    '  <div class="info">' + 
                    '    <div class="details">Je kunt de bestelling binnen 14 dagen via een DHL servicepunt naar ons kosteloos terug zenden. Als wij je pakket hebben ontvangen, dan krijg je een e-mail met de ontvangsbevestiging. Als we dit in gang zetten kan het tot 14 dagen duren voordat je je geld teruggestort krijgt. Maar in ieder geval binnen 30 dagen na ontbinding.<br><br>' + 
                    ' ' + 
                    'Let op: speciale artikelen als trouwringen, naamartikelen en gravures hebben een apart ruil/retourbeleid. Bekijk deze hier.</div>' + 
                    '  </div>' + 
                    '</div>' + 
                    '<div class="product-detail">' + 
                    '  <div class="header"></div>' + 
                    '  <div class="description">Meer info: Heb je een andere vraag en staat deze niet bij de veelgestelde vragen?</div>' + 
                    '  <div class="info">' + 
                    '    <div class="details">Neem dan gerust contact op met onze klantenservice. Dit kan via ons contactformulier. Of telefonisch op werkdagen tussen 09.00 en 17.00 op 070-3766361.</div>' + 
                    '  </div>' + 
                    '</div>' + 
                    '</div>');
                
            }
            
            if($('.price[itemprop="offers"]')[0]) {
                if(!$('.price[itemprop="offers"]').find('.price-value')[0]) { 
                    $('.price[itemprop="offers"]').append('<div class="bekijkproduct">Bekijk & bestel</div>');
                }
            }
            
            if($('.product-options')[0]) { 
                $('.product-options .intro.item').after('<div class="input-item paars">' +
                    '<p>' + 
                    'Op voorraad, direct leverbaar <br />' + 
                    'Voor 15:00 besteld, morgen in huis' + 
                    '</p>' + 
                    '</div>');
            }
        });