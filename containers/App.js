import React from 'react';
import ShapeContainer from '../containers/ShapeContainer';

const App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Shapes</h1>
        <ShapeContainer />
      </div>
    );
  }
});

export default App;
