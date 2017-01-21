
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
//import {actions} from '../actions/index';

var actions = require('../actions/index');

export class GuessForm extends React.Component {
    constructor (props) {
        super(props);
        this.submitGuess = this.submitGuess.bind(this);
    }

    submitGuess(event) { 
        event.preventDefault();
        var value = this.refs.input.value;
        console.log(this.props);
        this.props.dispatch(actions.makeGuess(value));
        }

    render () {

        return (
            <div>
                <form onSubmit={this.submitGuess}>
                    <input id="guessText" placeholder="Enter your guess here!" type="text" maxLength="3" ref="input" required/>
                    <input id="guessSubmit" type="submit" />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) { return state; } 
function mapDispatchToProps(dispatch) { return { actions: bindActionCreators(actions, dispatch) }; } 
export default connect(mapStateToProps, mapDispatchToProps)(GuessForm);

//export default connect(null, actions)(GuessForm);

/*

var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var GuessForm = React.createClass({
    submitGuess: function(event) {
        event.preventDefault();
        this.props.dispatch(actions.makeGuess(this.refs.input.value));
    },
    render: function() {
        return (
            <form onSubmit={this.submitGuess}>
                <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required ref="input" />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
});

var Container = connect()(GuessForm);

module.exports = Container;

*/