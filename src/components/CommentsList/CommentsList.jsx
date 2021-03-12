import React from "react";
import styles from "./CommentsList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CommentsListItem from "./CommentsListItem/CommentsListItem";
import PropTypes from "prop-types";

const CommentsList = ({ comments, deleteComment }) => {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
  };
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {comments.map(({ _id, name, comment, time }) => {
        const postTime = new Date(time).toLocaleString("Uk-Uk", options);
        return (
          <CSSTransition key={_id} timeout={250} classNames={styles}>
            <CommentsListItem
              id={_id}
              name={name}
              comment={comment}
              time={postTime}
              deleteComment={deleteComment}
            ></CommentsListItem>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.array,
  deleteComment: PropTypes.func,
};
export default CommentsList;
