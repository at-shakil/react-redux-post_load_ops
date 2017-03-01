import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PostLoadOperations from '../services/PostLoadOperations';

class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    performPostLoadOperations: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.performPostLoadOperations();
  }

  render() {
    return (
      <div className="page-container">
        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  performPostLoadOperations() {
    PostLoadOperations(dispatch).run();
  }
});

export default connect(null, mapDispatchToProps)(App);
