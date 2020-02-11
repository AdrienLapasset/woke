import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BgImage from '../global/BgImage'

export class ArticleList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const postTitle = this.props.posts.map((post, index) => {
      if (post.categories[0] === 21) { //21 = Français, 23 = Anglais
        return (
          <li key={index}>
            <Link to={{
              pathname: `/article/${post.slug}`,
              state: {
                post
              }
            }}>{post.title.rendered}
            </Link>
            <BgImage url={post._embedded['wp:featuredmedia']['0'].source_url} />
          </li>)
      }
    }
    )

    return (
      <div>
        {postTitle}
      </div>
    );
  }
}

export default ArticleList;
