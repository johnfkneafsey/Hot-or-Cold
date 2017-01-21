import React from 'react';
import {connect} from 'react-redux';
var actions = require('../actions/index');

export function GuessList (props) {
    console.log(this)
    var guesses = this.props.map(function(guess, index) {
        console.log(this.props)
        return (
            <li key={index}>
                {guess}
            </li>
        );
    });

    return (
        <div>
            <h3>Your Previous Guesses</h3>
            <ul id="guessList">
                {guesses}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    guesses: state.guesses
});

export default connect(mapStateToProps)(GuessList);

// add id and classname + guesses between <ul>