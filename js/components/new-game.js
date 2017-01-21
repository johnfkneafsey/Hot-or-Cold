import React from 'react';
import {connect} from 'react-redux';
var actions = require('../actions/index');

export function NewGame (props) {
    function newGame(event) {
        event.preventDefault();
        this.props.dispatch(actions.newGame());
    }
    return (
        <div>
            <form>
                <input type="button" name="NewGame" value="New Game" onClick={newGame} />
            </form>
        </div>
    )
}


export default connect()(NewGame);