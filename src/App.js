import { Component } from "react";
import Title from "./shared/Title";
import GuestBook from "./components/GuestBook";
import CommentsList from "./components/CommentsList";
import axios from "axios";

class App extends Component {
  state = {
    comments: [],
  };
  componentDidMount() {
    axios
      .get("https://stormy-mountain-89000.herokuapp.com/")
      .then((response) => {
        this.setState({ comments: response.data });
      })
      .catch((error) => console.log(error));
  }

  handleNewComment = (comment) => {
    let { comments } = this.state;
    comments = [...comments, comment];
    this.setState({ comments });
  };
  render() {
    const comments = this.state.comments;
    return (
      <>
        <Title title="Welcome to our Guest Book"></Title>
        <GuestBook addComment={this.handleNewComment}></GuestBook>
        <CommentsList comments={comments}></CommentsList>
      </>
    );
  }
}

export default App;
