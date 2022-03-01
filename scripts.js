function nulstil() {
    document.getElementById("tekst").value = "";
    document.getElementById("resultat").innerHTML = "Nulstillet";
}
function beregnLix() {

    var tekst = document.getElementById("tekst").value;

    var ord = tekst.split(/\s+/); 
    // vi anvender /\s+/ som split for at undgå at dobbelt-mellemrum giver en forkert indikation af ord.

    var punktum = tekst.split("."); 
    // vi tæller antal punktum

    var lange_ord = 0;

    for (let i = 0; i < ord.length; i++) {
        if (ord[i].length > 6)
        {
            lange_ord++;
        };
    };

    // for-loop til lange tegn

    var LIX_tal = Math.round((ord.length - 1) / (punktum.length - 1) + (lange_ord * 100) / (ord.length - 1))

   //  (ord.length - 1) / (punktum.length - 1)) + ((lange_ord * 100 / (ord.length - 1

   //Sværhed:

   if (LIX_tal >= 55) betegnelse = "Meget svær <em>(i kategori med faglitteratur på akademisk niveau, lovtekster o.l.)</em>";
                else if (LIX_tal >= 45 && LIX_tal < 55) betegnelse = "Svær <em>(i samme kategori som saglige bøger, populærvidenskabelige værker, akademiske udgivelser.)</em>";
                else if (LIX_tal >= 35 && LIX_tal < 45) betegnelse = "Middel <em>(i samme kategori som  dagblade og tidsskrifter.)</em>";
                else if (LIX_tal >= 25 && LIX_tal < 35) betegnelse = "Let <em>(i samme kategori som f.eks ugebladslitteratur og skønlitteratur for voksne.)</em>";
                else betegnelse = "Let for alle <em>(i kategori med f.eks børnelitteratur.)</em>";

    document.getElementById("resultat").innerHTML = "Antal ord: " + (ord.length - 1) + "<br>" + "Antal punktummer: " + (punktum.length - 1) + "<br>" + "Lange ord: " + lange_ord + "<br>" + "<strong>Lix-tal: " + LIX_tal + "</strong>" + "<br>" + "Betegnelse: " + betegnelse;


}