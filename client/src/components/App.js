import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleGetPosts } from '../actions/posts';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetPosts())
  }
  render() {
    return (
      <div>
        stater code
      </div>
    );
  }
}

export default connect()(App);
