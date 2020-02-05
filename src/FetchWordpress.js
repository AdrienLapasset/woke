import React, { Component } from 'react';

export class FetchWordpress extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://woke.fr/wp-json/wp/v2/posts/?')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ posts: data })
      });
  }

  render() {
    const posts = this.state.posts.map(post =>
      <li key={post.title.rendered}>
        {post.title.rendered}
      </li>
    )
    console.log(posts)
    return (
      <div style={{ backgroundColor: 'black', height: '100vh', color: "white" }}>
        {posts[0]}
      </div>
    );
  }
}

export default FetchWordpress;
