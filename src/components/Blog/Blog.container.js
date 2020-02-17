import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArticleList from './ArticleList';
import Article from './Article';

export class ArticleContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      postSlugs: []
    }
  }

  componentDidMount() {
    fetch('https://woke.fr/wp-json/wp/v2/posts?categories=21') //21 = Français, 23 = Anglais
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.setState({ posts: data }, () => this.getPostSlugs())
      });
  }

  getPostSlugs() {
    const postSlugs = []
    this.state.posts.map((post) => {
      postSlugs.push(post.slug)
    }, this.setState({ postSlugs }))
  }

  render() {
    const { match } = this.props
    const { posts, postSlugs } = this.state
    return (
      <Switch>
        <Route exact path={`${match.path}`}>
          <ArticleList posts={posts} postSlugs={postSlugs} />
        </Route>
        <Route path={`/blog/:slug`}>
          <Article postSlugs={postSlugs} />
        </Route>
      </Switch>
    );
  }
}

export default ArticleContainer;
