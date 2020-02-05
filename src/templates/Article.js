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

  componentDidUpdate(prevProps) {
    if (prevProps != this.props) {
      fetch('https://woke.fr/wp-json/wp/v2/posts/' + this.props.id)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({ postContent: data.content.rendered })
        });
    }
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.state.postContent }}></div>
      </div>
    );
  }
}

export default Article;
