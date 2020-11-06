import {removeCardFromDeck, flipBackPairCards} from "../js/cards.js";
import {soundGame} from '../js/sound.js';

export function eventsProcess() {
    //Have just started Game Memo
    if (window.$isTimerStart){
        
        //If you have just flipped a correct card 
        if (window.$isPairCards && !window.$isOnEventDeckChange){
                setTimeout(function(){soundGame("Correct card")},500);
                window.$isOnEventDeckChange = true;//Disable mouse click when remove cards
                setTimeout(function(){
                    removeCardFromDeck();
                    //If you have just finished all cards on the deck - Well done 
                    if (window.$numberCardsOnDeck===0){
                        setTimeout(function(){soundGame("Well done")},500);
                        window.$isTimerStart = false;
                        window.$isGameFinish = true;
                        //then, process saving score and adding to Top Score
                        let last = window.$topScores.length-1;
                        if (window.$yourCount < window.$topScores[last].score){
                            //Update top scores process
                            let newUserScore = {
                                name:window.$yourName,
                                score:window.$yourCount
                            }
                            //Replace the last userInfor in TopScores
                            window.$topScores.splice(last,1,newUserScore);
                            //Re-sort
                            window.$topScores.sort ((a, b) => a.score - b.score);
                            window.$isUpdateTopScore(true);//setState for TopScoresMemo to re-render 
                        }
                    }
                },1000);
        }
        else
        {   //If you have just flipped a wrong card
            if (window.$isFlipBackPairCards && !window.$isOnEventDeckChange){
                window.$isOnEventDeckChange = true;//Disable mouse click when flip-back cards
                setTimeout(function(){soundGame("Wrong card")},500);
                setTimeout(function(){
                    flipBackPairCards();
                    soundGame("Flip a card");
                },2000);
            }
        }
    }
    
}