import React from 'react';
import {connect} from 'react-redux';

import {Header} from './header';
import {GuessForm} from './guess-form';
import {NewGame} from './new-game';
import {GuessList} from './guess-list';
import {GuessCount} from './guess-count';
import {GuessFeedback} from './guess-feedback';

export function Game (props) {
    return (
        <div>
            <NewGame />
            <Header />
            <GuessForm />
            <GuessFeedback />
            <GuessCount />
            <GuessList />
        </div>
    )
}

export default connect()(Game)



/* ADDIITONAL COMPONENTS NEEDED
    -Guess Entry (CORE) --
    -Guess Count (CORE)
    -New Game (CORE) --
    -Guess List (CORE)
    -Header (CORE) --

    Extension:
    -What? 

*/