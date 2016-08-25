import React from 'react';
import { connect } from 'react-redux';
import Square from '../components/shapes/Square';

const ConnectedSquare = React.createClass({
  render: function() {
    return (
      <div className='connected-shape-wrapper'>
        <Square
          color={this.props.square.color}
          sideLength={this.props.square.sideLength}
          />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return { square: state.getIn(['shapes', 'square']).toJS() };
}

export default connect(mapStateToProps)(ConnectedSquare);

