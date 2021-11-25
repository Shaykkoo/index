var rep = new Array;

var faite = new Array;

var score = 0;
 
 



rep[1] = "d";

rep[2] = "c";

rep[3] = "d";

rep[4] = "b";

rep[5] = "c";

rep[6] = "c";

rep[7] = "b";

rep[8] = "c";

rep[9] = "b";

rep[10] = "b";
 


function truc(){
        alert("c'est un point de vue");
        }
        
        function Engine(question, reponse) {
        
                if (reponse != rep[question]) {
        
                        if (!faite[question]) {
        
                                faite[question] = -1;
        
                                alert(" Réponse incorrecte ");
        
                                }
        
                        else {
        
        
                                }
        
                        }
        
                else {
        
                        if (!faite[question]) {
        
                                faite[question] = -1;
        
                                score++;
        
                                alert(" Réponse Correcte ");
        
                                }
        
                        else { 
        
                                }
        
                        }
        
        }

// commentaires pour le résultat final

function NextLevel () {

        if (score == 10) {

                alert(score + "/10. " + "Parfait");

                }

        if (score > 8 && score <= 9) {

                alert(score + "/10. " + " Presque parfait !");

                }

        if (score > 6 && score <= 8) {

                alert(score + "/10. " + "Bien, mais... pas parfait.");

                }
 
 

        if (score >= 4 && score < 6) {

                alert(score + "/10. " + "Pas terrible... un autre essai ?");

                }

        if (score < 4) {

                alert(score + "/10. " + "Recommence l'éxercice");

                }
 
 
 



faite = new Array;

score = 0;



document.quest.reset();
        }
        
function Reset() {

alert("Le QCM a été reinitialisé.")
 

faite = new Array;

score = 0;


document.quest.reset();

}

