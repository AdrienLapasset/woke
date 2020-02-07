import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import ArticleList from '../pages/ArticleList';
import Article from '../pages/Article';

export class ArticleContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://woke.fr/wp-json/wp/v2/posts?_embed')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ posts: data })
      });
  }

  render() {
    return (
      <Router>
        <Route exact path="/">
          <ArticleList posts={this.state.posts} />
        </Route>
        <Route path="/article/:slug" component={Article} />
      </Router>
    );
  }
}

export default ArticleContainer;
