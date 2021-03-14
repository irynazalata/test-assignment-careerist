import React from "react";
import styles from "./CommentsListItem.module.css";
import PropTypes from "prop-types";

const CommentsListItem = ({
  id,
  comment,
  name,
  time,
  token,
  deleteComment,
}) => {
  function tokenExists() {
    const savedTokens = JSON.parse(localStorage.getItem("tokens"));
    if (savedTokens) return savedTokens.find((item) => item["token"] === token);
  }
  const commentToken = tokenExists();
  return (
    <li className={styles.item}>
      <div className={styles.infoContainer}>
        <p className={styles.time}>{time}</p>
        <p className={styles.name}>{name}:</p>
      </div>
      <p className={styles.comment}>{comment}</p>
      {commentToken ? (
        <button
          type="button"
          className={styles.btn}
          onClick={() => deleteComment(id)}
        >
          Delete
        </button>
      ) : (
        ""
      )}
    </li>
  );
};

CommentsListItem.propTypes = {
  comment: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
  deleteComment: PropTypes.func,
};

export default CommentsListItem;
