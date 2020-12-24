import React from 'react';
import {scrSounds} from '../js/sound.js';

export default function AudioMemo() {
    return (
        <>
            {scrSounds.map((e) => ( 
                 <audio id={e.id} src={e.soundscr} controls="none"></audio>
            ))}
        </>
    )
}