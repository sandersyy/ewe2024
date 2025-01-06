
/*    const myPromise = new Promise(function(myResolve, myReject)
    {
        setTimeout(function(){ myResolve("I love You !!");},3000);

});

    myPromise.then(function() {
    document.getElementById("demo").innerHTML = "Nächstes Spiel";});*/
// Importation des fonctions spécifiques
import { startGame, endGame } from './quizgame.js';
import {startGamesvg, handleBallClick} from './svgGAME.js';


    //Dom Elemente Deklaration
     let name="kamto";
     let  gametitle=document.getElementById("game-title") ;
     let gamearea=document.getElementById("game-area") ;
     var button=document.getElementById('button') ;
     var buttonsvg=document.getElementById('buttonsvg') ;
     var questiondiv=document.getElementById('questiondiv')
//funktionen

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
            <ul id="answers"></ul>` ;
            button.addEventListener('click', startGame);
            button.addEventListener('click', ()=>{
                document.getElementById('question').innerText="Fragen werden geladen .warte 2 sec!";
                button.textContent="Quiz neue starten";
            });

        });


       // document.getElementById('end-game').addEventListener('click', endGame);
    }

// Initialisation
    button.addEventListener("click", spiel1_domselect)  ;
    buttonsvg.addEventListener("click",()=>{ //even to enter svg game div
        gametitle.innerText="Wilkommen zum SVG Spiel";

        gamearea.innerHTML=`  
    <div>
        <label for="difficulty">wähle eine Schwierigkheit:</label>
        <select id="difficulty">
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
        </select>
        <button id="startsvggame">animation starten</button>
    </div>
    <svg id="area" width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
        <!-- kugel -->
        <circle id="ball" cx="50" cy="50" r="20" fill="blue" />
    
    </svg>
    <div id="message">'klicke auf die Kugel'</div>
<!--    <script type="module" src="svgGAME.js " defer></script>-->
        `;
        document.getElementById('startsvggame')//event for starting svg game
            .addEventListener("click",startGamesvg);
        document.getElementById('ball')    //event for clicking on the ball
            .addEventListener("click", handleBallClick)  ;});

    // test
      //gamearea.firstElementChild.remove()
      console.log(gamearea.firstElementChild)
      console.log(name)




  