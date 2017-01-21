import React from 'react';
import {connect} from 'react-redux';
var actions = require('../actions/index');

export function GuessFeedback (props) {
    return (
        <div>
            <h3 id="feedback">
                Filler
                {props.feedback}
            </h3>
        </div>
    );
};

const mapStateToProps = (state) => ({
    feedback: state.feedback
})

export default connect(mapStateToProps)(GuessFeedback)