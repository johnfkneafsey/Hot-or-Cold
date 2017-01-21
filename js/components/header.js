import React from 'react';
import {connect} from 'react-redux';
var actions = require('../actions/index');

export function Header (props) {
    return (
        <div>
            <h1>The Hot or Cold Game</h1>
        </div>
    );
}

export default connect()(Header);