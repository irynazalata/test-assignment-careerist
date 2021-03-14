import React, { Component } from "react";
import styles from "./GuestBook.module.css";
import axios from "axios";

class GuestBook extends Component {
  state = {
    name: "",
    comment: "",
    time: Date.now(),
    tokens: [],
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
      .post("https://guestbook-database.herokuapp.com/", commentJSON, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        let { tokens } = this.state;
        tokens = [
          ...tokens,
          { token: response.data.token, id: response.data._id },
        ];
        this.setState({
          name: "",
          comment: "",
          tokens: tokens,
        });
        localStorage.setItem("tokens", JSON.stringify(this.state.tokens));
        this.props.addComment(response.data);
      })
      .catch((error) => console.log(error));
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
