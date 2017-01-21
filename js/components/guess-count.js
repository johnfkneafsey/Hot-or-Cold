import React from 'react';
import {connect} from 'react-redux';
var actions = require('../actions/index');

export function GuessCount (props)  {
    return (
        <div>
            <h3>Number of Guesses So Far</h3>
            <p>
                Guess #: <span id='count'>{props.count}</span>!
            </p>
        </div>
    )
};

const mapStateToProps = (state) => ({
    count: state.guesses.length
});

export default connect(mapStateToProps)(GuessCount);


