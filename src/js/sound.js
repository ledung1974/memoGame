export const scrSounds = [
    { 
        id:"shuffle_cards",
        eventname:"Shuffle cards",
        soundscr:"../sounds/shufflecards.mp3"
    },
    {   
        id:"flip_a_card",
        eventname:"Flip a card",
        soundscr:"../sounds/flipcard.mp3"
    },
    {   
        id:"correct_card",
        eventname:"Correct card",
        soundscr:"../sounds/correctcard.mp3"
    },
    {   
        id:"wrong_card",
        eventname:"Wrong card",
        soundscr:"../sounds/wrongcard.mp3"
    },
    {   
        id:"well_done",
        eventname:"Well done",
        soundscr:"../sounds/welldone.mp3"
    },
    {   
        id:"game_over",
        eventname:"Game over",
        soundscr:"../sounds/gameover.mp3"
    },
    {   
        id:"on_top_score",
        eventname:"On top score",
        soundscr:"../sounds/topscore.mp3"
    },
    {   
        id:"sign_out",
        eventname:"Sign out",
        soundscr:"../sounds/signout.mp3"
    },
];

export function soundGame(eventname) {
    let obj = scrSounds.find(element => element.eventname===eventname);
    if (obj){
        let s = document.getElementById(obj.id);
        s.load();
        s.play();
    }    
}