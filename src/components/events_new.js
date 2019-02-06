import React, {Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { postEvent } from '../actions';

class EventsNew extends Component {

  render() {
    return (
      <Fragment>
      <div>
        bar
      </div>
      <Link to="/">Cancel</Link>
      </Fragment>
    )
  }
}

const mapStateToProps = state => null

const mapDispatchToProps = null


export default connect(mapStateToProps, mapDispatchToProps)(EventsNew);
