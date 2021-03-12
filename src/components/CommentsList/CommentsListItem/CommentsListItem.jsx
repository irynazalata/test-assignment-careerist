import React from "react";
import styles from "./CommentsListItem.module.css";
import PropTypes from "prop-types";

const CommentsListItem = ({ comment, name, time }) => {
  return (
    <li className={styles.item}>
      <div className={styles.infoContainer}>
        <p className={styles.time}>{time}</p>
        <p className={styles.name}>{name}:</p>
      </div>

      <p className={styles.comment}>{comment}</p>
    </li>
  );
};

CommentsListItem.propTypes = {
  comment: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
};

export default CommentsListItem;
