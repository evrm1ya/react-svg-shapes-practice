import React from 'react';
import { connect } from 'react-redux';
import Circle from '../components/shapes/Circle';

const ConnectedCircle = React.createClass({
  render: function() {
    return (
      <div className='connected-shape-wrapper'>
        <Circle 
          color={this.props.circle.color}
          diameter={this.props.circle.diameter}
          />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return { circle: state.getIn(['shapes', 'circle']).toJS() }
}

export default connect(mapStateToProps)(ConnectedCircle);

