
// Vi definerer funktionen til nulstilling af tekstboksen.

function nulstil() {
    document.getElementById("tekst").value = ""; // Value på tekstarealet sættes til blank, så feltet "nulstilles".
    document.getElementById("resultat").innerHTML = "Nulstillet <em>afventer input</em>"; // Resultat-feltet nulstilles også og besked herom sættes ind.
}

// Vi definerer funktionen til beregningen.

function beregnLix() {

    var tekst = document.getElementById("tekst").value; // Vi "trækker" tekst-boksen.

    var ord = tekst.split(/\s+/); // Vi anvender /\s+/ som split for at undgå at dobbelt-mellemrum giver en forkert indikation af ord.

    var punktum = tekst.split(".");  // Vi tæller antal punktummer.

    var lange_ord = 0; // Lange-ord sættes til 0, så der ikke startes på 1.

    // Nedenstående for-loop finder de lange ord.
    for (let i = 0; i < ord.length; i++) {
        if (ord[i].length > 6)
        {
            lange_ord++;
        };
    };

    var LIX_tal = Math.round((ord.length - 1) / (punktum.length - 1) + (lange_ord * 100) / (ord.length - 1)) // LIX-tallet beregnes ud fra vores variabler.

   // Herunder defineres vores betegnelser, herunder forklaring, ud fra det beregnede lix-tal.

   if (LIX_tal >= 55) betegnelse = "Meget svær <em>(i kategori med faglitteratur på akademisk niveau, lovtekster o.l.)</em>";
                else if (LIX_tal >= 45 && LIX_tal < 55) betegnelse = "Svær <em>(i samme kategori som saglige bøger, populærvidenskabelige værker, akademiske udgivelser.)</em>";
                else if (LIX_tal >= 35 && LIX_tal < 45) betegnelse = "Middel <em>(i samme kategori som  dagblade og tidsskrifter.)</em>";
                else if (LIX_tal >= 25 && LIX_tal < 35) betegnelse = "Let <em>(i samme kategori som f.eks ugebladslitteratur og skønlitteratur for voksne.)</em>";
                else betegnelse = "Let for alle <em>(i kategori med f.eks børnelitteratur.)</em>";

    document.getElementById("resultat").innerHTML = "Antal ord: " + (ord.length - 1) + "<br>" + "Antal punktummer: " + (punktum.length - 1) + "<br>" + "Lange ord: " + lange_ord + "<br>" + "<strong>Lix-tal: " + LIX_tal + "</strong>" + "<br>" + "Betegnelse: " + betegnelse; // Her indsættes resultatet i resultat-elementet.

    if (!Number.isFinite(LIX_tal)) { // For at undgå forvirrende beskeder om "Infinite" lix-tal vil vi herunder indsætte en forklaring i tilfælde af dette:
        document.getElementById("resultat").innerHTML = "Du er der næsten .. <em>der mangler kun lidt variabler endnu for at kunne beregne LIX.</em>"
       }

}