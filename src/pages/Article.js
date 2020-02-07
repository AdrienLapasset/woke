import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export class Article extends Component {
  constructor(props) {
    super(props)

    this.state = {
      postContent: 'toto'
    }
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.props.location.state.post.content.rendered }}></div>
      </div>
    );
  }
}

export default Article;
