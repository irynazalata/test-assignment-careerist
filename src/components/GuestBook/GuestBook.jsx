import React, { Component } from "react";
import styles from "./GuestBook.module.css";
import axios from "axios";

class GuestBook extends Component {
  state = {
    name: "",
    comment: "",
    time: Date.now(),
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const comment = {
      name: this.state.name,
      comment: this.state.comment,
      time: this.state.time,
    };
    const commentJSON = JSON.stringify(comment);
    axios
      .post("https://stormy-mountain-89000.herokuapp.com/", commentJSON, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    this.props.addComment(comment);
    this.setState({
      name: "",
      comment: "",
    });
  };
  render() {
    const { name, comment } = this.state;
    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            Your name
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.handleChange}
              placeholder="Enter your name"
              className={styles.input}
              required
            />
          </label>
          <label className={styles.label}>
            Your comment
            <textarea
              type="text"
              value={comment}
              name="comment"
              onChange={this.handleChange}
              placeholder="Write your comment here"
              className={styles.textarea}
              required
            />
          </label>
          <input type="submit" value="Add comment" className={styles.button} />
        </form>
      </>
    );
  }
}

export default GuestBook;
