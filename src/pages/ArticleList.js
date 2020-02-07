import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Article from '../templates/Article'
import BgImage from '../components/BgImage'

export class ArticleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      selectedPostId: 241
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

  onClickLink(postId) {
    this.setState({ selectedPostId: postId })
  }

  render() {
    const postTitle = this.state.posts.map(post => {
      if (post.categories[0] === 21) { //21 = Français, 23 = Anglais
        return (
          <li key={post.id}>
            <Link to={post.slug} onClick={() => this.onClickLink(post.id)}>{post.title.rendered}</Link>
            <BgImage url={post._embedded['wp:featuredmedia']['0'].source_url} />
          </li>)
      }
    }
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
