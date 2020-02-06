import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Article from "../templates/Article"

export class ArticleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      selectedPostId: 241
    }
  }

  componentDidMount() {
    fetch('https://woke.fr/wp-json/wp/v2/posts/?per_page=100')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ posts: data })
      });
  }

  onClickLink(postId) {
    this.setState({ selectedPostId: postId })
  }

  render() {
    const postTitle = this.state.posts.map(post =>
      <li key={post.id}>
        <Link to={post.slug} onClick={() => this.onClickLink(post.id)}>{post.title.rendered}</Link>
      </li>
    )
    const postContent = this.state.posts.map(post =>
      <div key={post.id} dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
    )

    return (
      <Router>
        <div>
          {postTitle}
        </div>
        <Switch>
          <Route path="/:slug" children={<Article id={this.state.selectedPostId} />} />
        </Switch>
      </Router>
    );
  }
}

export default ArticleList;
