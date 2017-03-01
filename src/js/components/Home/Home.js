import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import PostLoadOperations from '../../services/PostLoadOperations';
import { PostLoadOperationType } from '../../constants/Enums';
import './Home.scss';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      message: ""
    };
  }

  render() {
    const
      { postLoadMessage, onSpaReload } = this.props,
      { message } = this.state;

    return (
      <div className="home">
        <span className="input-label">Message: </span>
        <input className="form-control primary-input"
          value={message}
          onChange={e => this.setState({message: e.target.value})} />
        <Button className="submit-button" onClick={e => onSpaReload(message)}>
          Click me to reload the SPA!
        </Button>
        <div className="post-load-message">
          Post-load Message: {postLoadMessage}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  postLoadMessage: state.home.postLoadMessage
});

const mapDispatchToProps = dispatch => ({
  onSpaReload(message) {
    PostLoadOperations().push(PostLoadOperationType.MESSAGE, message);
    location.reload();
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
