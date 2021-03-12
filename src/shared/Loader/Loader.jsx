import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";

const InfoLoader = () => {
  return (
    <div className={styles.loader}>
      <Loader type="ThreeDots" color="#f1392d" height={50} width={50} />
    </div>
  );
};

export default InfoLoader;
