import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ConnectedShapeMenu from './ConnectedShapeMenu';
import ConnectedCircle from './ConnectedCircle';
import ConnectedTriangle from './ConnectedTriangle';
import ConnectedSquare from './ConnectedSquare';

const App = React.createClass({
  render: function() {
    return (
      <div className='app'>
        <h1>Shapes</h1>

        <p>React/Redux/Immutable practice</p>

        <ConnectedShapeMenu />

        <div className='shape-container'>
          <div className='connected-shape-wrapper'>
            <ConnectedCircle />
          </div>

          <div className='connected-shape-wrapper'>
            <ConnectedSquare />
          </div>

          <div className='connected-shape-wrapper'>
            <ConnectedTriangle />
          </div>
        </div>
      </div>
    );
  }
});

export default App;

