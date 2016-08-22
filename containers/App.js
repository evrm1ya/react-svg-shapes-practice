import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Circle from '../components/Circle';
import Square from '../components/Square';
import Triangle from '../components/Triangle';

const App = React.createClass({
  render: function() {
    return (
      <div className='app'>
        <h1>Shapes</h1>
        <p>React/Redux/Immutable practice</p>
      </div>
    );
  }
});

export default connect()(App);
