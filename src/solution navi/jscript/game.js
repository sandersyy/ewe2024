
/*    const myPromise = new Promise(function(myResolve, myReject)
    {
        setTimeout(function(){ myResolve("I love You !!");},3000);

});

    myPromise.then(function() {
    document.getElementById("demo").innerHTML = "Nächstes Spiel";});*/
// Importation des fonctions spécifiques
import { startGame, endGame } from './quizgame.js';

    //Dom Elemente Deklaration
     let name="kamto";
     let  gametitle=document.getElementById("game-title") ;
     let gamearea=document.getElementById("game-area") ;
     var button=document.getElementById('button') ;
     var questionh1=document.getElementById("question-h1");
     var questiondiv=document.getElementById('questiondiv')
//funktionen

//name eingeben und anzeigen mit DOM selektion und Manipulation und eventlistener

    function spiel1_domselect(e){
        //gamearea.firstElementChild.remove() //remove the old first div to insert the new one
        questiondiv.innerHTML=` <div id="questiondiv">
                    <h1 id="question-h1">Glückwunch.du hast dem HTML Element ${e.target} 
                     geklikt!!<br> Gib dein Name für das nächste Spiel!</h1>
                    <input type="text" id="textinput1">
                </div>`;
        button.textContent="Nächstes Spiel"
        gamearea
            .addEventListener("input",(e)=>
            {if(e.target.id==='textinput1')name=e.target.value});
        //button.removeEventListener("click", spiel1_domselect);
        button.addEventListener("click", spiel2_nameEingabe);
        console.log(gamearea)

    }

    function spiel2_nameEingabe(){
        console.log(gamearea)

        questiondiv.innerHTML=` <div id="questiondiv">
                    <h1 id="question-h2">Glückwunch ${name} !!.du hast diese Stuffe erledigt!!<br>  
                     jetzt kommt die Quizz Game!!<br> </h1>`
        console.log(name) ;
        //button.removeEventListener("click", spiel2_nameEingabe);
        // Using imported functions
        button.addEventListener('click', ()=>
        {button.textContent="Quiz starten";
            gamearea.innerHTML=` <div id="questiondiv">
            <h1 id="question">klicke auf  "Quiz starten" um Quiz zu Starten.</h1>
            <ul id="answers"></ul>`});

        button.addEventListener('click', startGame);
       // document.getElementById('end-game').addEventListener('click', endGame);
    }
    
// Initialisation
    button.addEventListener("click", spiel1_domselect)  ;

    // test
      //gamearea.firstElementChild.remove()
      console.log(gamearea.firstElementChild)
      console.log(name)




  