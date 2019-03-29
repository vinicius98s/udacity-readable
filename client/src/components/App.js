import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { handleGetPosts } from '../actions/posts';
import { handleGetCategories } from '../actions/categories';

import Home from './Home';
import Categories from './Categories';
import Post from './Post';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetPosts())
    this.props.dispatch(handleGetCategories())
  }

  render() {
    if(this.props.loading) {
      return (
        <h1>Carregando</h1>
      )
    }

    return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/:category' component={Categories} />
        <Route exact path='/:category/:id' component={Post} />
      </Router>
    )
  }
}

function mapStateToProps({ posts, categories, loading }) {
  return {
    posts,
    categories,
    loading: loading.default
  }
}

export default connect(mapStateToProps)(App);
