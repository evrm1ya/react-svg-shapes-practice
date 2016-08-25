import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ConnectedCircle from './ConnectedCircle';
import ConnectedTriangle from './ConnectedTriangle';
import ConnectedSquare from './ConnectedSquare';

const App = React.createClass({
  render: function() {
    return (
      <div className='app'>
        <h1>Shapes</h1>
        <p>React/Redux/Immutable practice</p>
        <div className='shape-container'>
          <ConnectedCircle />
          <ConnectedSquare />
          <ConnectedTriangle />
        </div>
      </div>
    );
  }
});

export default connect()(App);

