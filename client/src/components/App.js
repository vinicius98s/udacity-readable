import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { handleGetPosts } from "../actions/posts";
import { handleGetCategories } from "../actions/categories";

import PostsList from "./PostsList";
import PostPage from "./PostPage";
import Layout from "./Layout";
import Header from "./Header";
import HandlePost from "./HandlePost";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleGetPosts());
        this.props.dispatch(handleGetCategories());
    }

    render() {
        if (this.props.loading) {
            return <h1>Carregando</h1>;
        }

        return (
            <Router>
                <Header />
                <Layout>
                    <Switch>
                        <Route exact path="/" component={PostsList} />
                        <Route exact path="/post" component={HandlePost} />
                        <Route exact path="/post/:id" component={HandlePost} />
                        <Route exact path="/:category" component={PostsList} />
                        <Route exact path="/:category/:id" component={PostPage} />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

function mapStateToProps({ posts, categories, loading }) {
    return {
        posts,
        categories,
        loading: loading.default
    };
}

export default connect(mapStateToProps)(App);
