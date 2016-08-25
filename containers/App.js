import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ConnectedCircle from './ConnectedCircle';
import Circle from '../components/shapes/Circle';
import Triangle from '../components/shapes/Triangle';
import Square from '../components/shapes/Square';

const App = React.createClass({
  render: function() {
    return (
      <div className='app'>
        <h1>Shapes</h1>
        <p>React/Redux/Immutable practice</p>
        <div className='shape-container'>
          <ConnectedCircle />
        </div>
        <Triangle />
        <Square />
      </div>
    );
  }
});

export default connect()(App);

